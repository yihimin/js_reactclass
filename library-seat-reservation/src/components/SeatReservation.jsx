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
  margin-bottom: 20px;
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

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 10;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

const initialSeats = [
  { id: 1, x: 50, y: 50, seatNumber: 'A1', reserved: false },
  { id: 2, x: 50, y: 120, seatNumber: 'A2', reserved: false },
  { id: 3, x: 50, y: 190, seatNumber: 'A3', reserved: false },
  { id: 4, x: 50, y: 260, seatNumber: 'A4', reserved: false },
  { id: 5, x: 50, y: 330, seatNumber: 'A5', reserved: false },
  { id: 6, x: 190, y: 260, seatNumber: 'B1', reserved: false },
  { id: 7, x: 260, y: 260, seatNumber: 'B2', reserved: false },
  { id: 8, x: 330, y: 260, seatNumber: 'B3', reserved: false },
  { id: 9, x: 400, y: 260, seatNumber: 'B4', reserved: false },
  { id: 10, x: 470, y: 260, seatNumber: 'B5', reserved: false },
];

export default function SeatReservation() {
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const handleReserve = () => {
    // 무조건 로그인 성공 처리
    const updatedSeats = seats.map((seat) =>
      seat.id === selectedSeat.id ? { ...seat, reserved: true } : seat,
    );
    setSeats(updatedSeats);
    closeModal();
  };

  const handleCancel = () => {
    // 무조건 로그인 성공 처리
    const updatedSeats = seats.map((seat) =>
      seat.id === selectedSeat.id ? { ...seat, reserved: false } : seat,
    );
    setSeats(updatedSeats);
    closeModal();
  };

  const closeModal = () => {
    setSelectedSeat(null);
    setId('');
    setPassword('');
  };

  return (
    <Container>
      <h2>도서관 좌석 예약 시스템</h2>
      <h4>
        빈 좌석: {seats.filter((s) => !s.reserved).length} / {seats.length}
      </h4>

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

      {selectedSeat && (
        <>
          <Backdrop onClick={closeModal} />
          <Modal>
            <h3>
              {selectedSeat.reserved ? '예약 취소' : '좌석 예약'} -{' '}
              {selectedSeat.seatNumber}
            </h3>
            <input
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              onClick={selectedSeat.reserved ? handleCancel : handleReserve}
            >
              {selectedSeat.reserved ? '취소하기' : '예약하기'}
            </button>
            <button onClick={closeModal}>닫기</button>
          </Modal>
        </>
      )}
    </Container>
  );
}
