import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const SeatMap = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
`;

const Seat = styled.div`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.reserved ? 'purple' : '#4caf50')};
  color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const initialSeats = [
  // 기역자 형태: 세로줄
  { id: 1, x: 50, y: 50, seatNumber: 'A1', reserved: false },
  { id: 2, x: 50, y: 120, seatNumber: 'A2', reserved: false },
  { id: 3, x: 50, y: 190, seatNumber: 'A3', reserved: false },
  { id: 4, x: 50, y: 260, seatNumber: 'A4', reserved: false },
  { id: 5, x: 50, y: 330, seatNumber: 'A5', reserved: false },
  // 기역자 형태: 가로줄
  { id: 6, x: 190, y: 260, seatNumber: 'B1', reserved: false },
  { id: 7, x: 260, y: 260, seatNumber: 'B2', reserved: false },
  { id: 8, x: 330, y: 260, seatNumber: 'B3', reserved: false },
  { id: 9, x: 400, y: 260, seatNumber: 'B4', reserved: false },
  { id: 10, x: 470, y: 260, seatNumber: 'B5', reserved: false },
];

export default function SeatReservation() {
  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (clickedSeat) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === clickedSeat.id ? { ...seat, reserved: !seat.reserved } : seat,
    );
    setSeats(updatedSeats);
  };

  return (
    <Container>
      <h2>좌석 예약 샘플</h2>
      <SeatMap>
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            x={seat.x}
            y={seat.y}
            reserved={seat.reserved}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.seatNumber}
          </Seat>
        ))}
      </SeatMap>
    </Container>
  );
}
