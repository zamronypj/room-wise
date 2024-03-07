import { QueryClient, useQuery } from 'react-query';
import * as apiClient from '../api-client';
import BookingForm from '../forms/BookingForm/BookingForm';
import { useSearchContext } from '../contexts/SearchContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookingDetailSummary from '../components/BookingDetailSummary';
import { Elements } from '@stripe/react-stripe-js';
import { useAppContext } from '../contexts/AppContext';

type Props = {
	queryClient: QueryClient;
};

const Booking = ({ queryClient }: Props) => {
	const search = useSearchContext();
	const { hotelId } = useParams();
	const [numberOfNights, setNumberOfNights] = useState<number>(0);
	const { stripePromise } = useAppContext();

	useEffect(() => {
		if (search.checkIn && search.checkOut) {
			const nights =
				Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) / // milliseconds
				(1000 * 60 * 60 * 24);
			setNumberOfNights(Math.ceil(nights));
		}
	}, [search.checkIn, search.checkOut]);

	// payment-intent (invoice)
	const { data: paymentIntentData } = useQuery(
		'createPaymentIntent',
		() => {
			return apiClient.createPaymentIntent(
				hotelId as string,
				numberOfNights.toString(),
			);
		},
		{ enabled: !!hotelId && numberOfNights > 0 }, // only create invoice if there is hotelId and numberOfNights
	);

	const { data: hotel } = useQuery(
		['fetchHotelById', hotelId], // send back id to memorize the latest hotel data
		() => apiClient.fetchHotelById(hotelId || ''),
		{
			enabled: !!hotelId, // check if hotelId has an actual value
		},
	);

	useEffect(() => {
		if (hotelId) {
			queryClient.invalidateQueries(['fetchHotelById', hotelId]);
		}
	}, [queryClient, hotelId]);

	// current user
	const { data: currentUser } = useQuery(
		'fetchCurrentUser',
		apiClient.fetchCurrentUser,
	);

	if (!hotel) {
		return <></>;
	}

	return (
		<div className="grid lg:grid-cols-[1fr_2fr] gap-8">
			<BookingDetailSummary
				checkIn={search.checkIn}
				checkOut={search.checkOut}
				adultCount={search.adultCount}
				childCount={search.childCount}
				numberOfNights={numberOfNights}
				hotel={hotel}
			/>
			{currentUser && paymentIntentData && (
				<Elements
					stripe={stripePromise}
					options={{
						clientSecret: paymentIntentData.clientSecret,
					}}
				>
					<BookingForm currentUser={currentUser} />
				</Elements>
			)}
		</div>
	);
};
export default Booking;
