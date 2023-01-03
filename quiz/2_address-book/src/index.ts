//특정 객체의 키를 정의하지 않았을때 여러가지 키값을 받고싶을때 사용하는 방법

import {Contact, PhoneType } from './types';

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() :Promise<Contact[]>{
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts : Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[]= [];

  constructor() {
    this.fetchData();
    this.findContactByPhone(2135486, PhoneType.Home);
  }

  fetchData() :void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName<T extends keyof Contact>(name: T): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  //home, office, studio
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact:Contact) :void {
    this.contacts.push(contact);
  }

  //name 프로퍼티만 들어간 배열이 반환됨
  displayListByName(): string[]{
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() : string[]{
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
