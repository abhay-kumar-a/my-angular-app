import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf , NgFor , NgClass , NgStyle, CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Taj Hotel';

  cityName = 'Mumbai';

  noOfRooms = 10;

  hideRooms = false;

  toggle() {
    this.hideRooms = true;
  }

  // 
  rooms: Rooms = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: "Deluxe Room",
      amenities: 'Air Conditioner, Free Wi-Fi , TV , Bathroom , Kitchen',
      price: 5000,
      photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('10-04-2025'),
      checkoutTime: new Date('10-04-2025'),
      rating : 3.5
    },
    {
      roomNumber:2,
      roomType: "Suite",
      amenities: 'A larger room with multiple rooms, such as a bedroom and a living area.. ',
      price: 10000,
      photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('10-04-2025'),
      checkoutTime: new Date('10-04-2025'),
      rating : 1.4
    },
    {
      roomNumber : 3,
      roomType: "Standard Room",
      amenities: 'The most basic room type, offering essential amenities. ',
      price: 50000,
      photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('10-04-2025'),
      checkoutTime: new Date('10-04-2025'),
      rating : 3.3
    },
    {
      roomNumber : 4,
      roomType : "Connecting Rooms",
      amenities : 'wo or more rooms that share a connecting door, ideal for families or groups...',
      price : 80000,
      photos : 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime : new Date('10-04-2025'),
      checkoutTime : new Date('10-04-2025'),
      rating : 4

      },
      

  ]


}
