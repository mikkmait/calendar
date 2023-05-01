const eventList = [
  { timeHour: '19', timeMinute: '00', date: 28, month: 3, year: 2023, allDay: false, name: 'Swan Lake premiere', type: 'PERSONAL', location: 'Tallinn' },
  { timeHour: '23', timeMinute: '00', date: 28, month: 3, year: 2023, allDay: false, name: 'Suusi missing', type: 'PERSONAL', location: 'Tallinn' },
  { timeHour: '19', timeMinute: '00', date: 29, month: 3, year: 2023, allDay: false, name: 'Frost / Bite premiere', type: 'PERSONAL', location: 'Riga' },
  { timeHour: '19', timeMinute: '00', date: 4, month: 4, year: 2023, allDay: false, name: 'Kriis.ID performance', type: 'WORK', location: 'Tartu' },
  { timeHour: '14', timeMinute: '00', date: 5, month: 4, year: 2023, allDay: false, name: 'Elektriteater birthday', type: 'EVENT', location: 'Tartu' },
  { timeHour: '09', timeMinute: '00', date: 5, month: 4, year: 2023, allDay: false, name: 'False/Falling rehearsal', type: 'WORK', location: 'Tallinn' },
  { timeHour: '14', timeMinute: '00', date: 2, month: 4, year: 2023, allDay: false, name: 'LED screen testing @ Vaba Lava', type: 'WORK', location: 'Tallinn' },
  { timeHour: '12', timeMinute: '00', date: 1, month: 4, year: 2023, allDay: false, name: 'Building Bridges development meeting', type: 'school', location: 'Online' },
  { timeHour: '00', timeMinute: '00', date: 20, month: 4, year: 2023, allDay: true, name: 'RS Quest regatta', type: 'sailing', location: 'Meltemi yachtclub' },
  { timeHour: '00', timeMinute: '00', date: 21, month: 4, year: 2023, allDay: true, name: 'RS Quest regatta', type: 'sailing', location: 'Meltemi yachtclub' },
  { timeHour: '00', timeMinute: '00', date: 21, month: 4, year: 2023, allDay: true, name: 'Yachtclub regatta', type: 'sailing', location: 'Võrtsjärv' },
  { timeHour: '00', timeMinute: '00', date: 20, month: 4, year: 2023, allDay: true, name: 'Yachtclub regatta', type: 'sailing', location: 'Võrtsjärv' },
  { timeHour: '18', timeMinute: '00', date: 20, month: 4, year: 2023, allDay: false, name: 'SDA HR class', type: 'coursework', location: 'Online' },
  { timeHour: '09', timeMinute: '00', date: 20, month: 4, year: 2023, allDay: false, name: 'SDA Live coding', type: 'coursework', location: 'Online' },
  { timeHour: '09', timeMinute: '00', date: 21, month: 4, year: 2023, allDay: false, name: 'SDA Live coding', type: 'coursework', location: 'Online' },
  { timeHour: '23', timeMinute: '00', date: 20, month: 4, year: 2023, allDay: false, name: 'UH3 Night meeting', type: 'personal', location: 'Kanuti Gildi SAAL' },
  { timeHour: '16', timeMinute: '00', date: 3, month: 4, year: 2023, allDay: false, name: 'Kolmapäevak', type: 'sailing', location: 'Pirita' },
  { timeHour: '09', timeMinute: '00', date: 6, month: 4, year: 2023, allDay: false, name: 'SDA Summary workshop', type: 'coursework', location: 'Online' },
  { timeHour: '09', timeMinute: '00', date: 7, month: 4, year: 2023, allDay: false, name: 'SDA Live workshop', type: 'coursework', location: 'Online' },
  { timeHour: '16', timeMinute: '30', date: 10, month: 4, year: 2023, allDay: false, name: 'Kolmapäevak', type: 'sailing', location: 'Pirita' },
  { timeHour: '16', timeMinute: '30', date: 17, month: 4, year: 2023, allDay: false, name: 'Kolmapäevak', type: 'sailing', location: 'Pirita' },
  { timeHour: '16', timeMinute: '30', date: 24, month: 4, year: 2023, allDay: false, name: 'Kolmapäevak', type: 'sailing', location: 'Pirita' },
  { timeHour: '16', timeMinute: '30', date: 31, month: 4, year: 2023, allDay: false, name: 'Kolmapäevak', type: 'sailing', location: 'Pirita' },
  { timeHour: '09', timeMinute: '00', date: 13, month: 4, year: 2023, allDay: false, name: 'SDA Live workshop', type: 'coursework', location: 'Online' },
  { timeHour: '09', timeMinute: '00', date: 14, month: 4, year: 2023, allDay: false, name: 'SDA Summary workshop', type: 'coursework', location: 'Online' },
  { timeHour: '14', timeMinute: '00', date: 14, month: 4, year: 2023, allDay: false, name: 'SDA Individual workshop', type: 'coursework', location: 'Online' },
  { timeHour: '00', timeMinute: '00', date: 11, month: 4, year: 2023, allDay: true, name: 'Spooky action at a distance', type: 'fesival/event/work', location: 'Online/Studio' },
  { timeHour: '00', timeMinute: '00', date: 12, month: 4, year: 2023, allDay: true, name: 'Spooky action at a distance', type: 'fesival/event/work', location: 'Online/Studio' },
  { timeHour: '00', timeMinute: '00', date: 13, month: 4, year: 2023, allDay: true, name: 'Spooky action at a distance', type: 'fesival/event/work', location: 'Online/Studio' },
]

const birthdayList = [
  { firstName: 'Kerli', lastName: 'Praks', year: 1991, month: 4, date: 7},
  { firstName: 'Andreas', lastName: 'Mäll', year: null, month: 4, date: 11},
  { firstName: 'Helis', lastName: 'Heiter', year: 1986, month: 4, date: 11},
  { firstName: 'Taavi', lastName: 'Tetlov', year: null, month: 4, date: 15},
  { firstName: 'Robert', lastName: 'Kähr', year: 1986, month: 4, date: 16},
  { firstName: 'Oliver', lastName: 'Soomets', year: 1980, month: 4, date: 17},
  { firstName: 'Katrina', lastName: 'Jõks', year: 1991, month: 4, date: 18},
  { firstName: 'Rasmus', lastName: 'Puksmann', year: null, month: 4, date: 18},
  { firstName: 'Indrek', lastName: 'Spungin', year: null, month: 4, date: 20},
  { firstName: 'Alyona', lastName: 'Movko', year: null, month: 4, date: 22},
  { firstName: 'Mart', lastName: 'Anderson', year: null, month: 4, date: 22},
  { firstName: 'Sander', lastName: 'Roosimägi', year: null, month: 4, date: 22},
  { firstName: 'Liisa', lastName: 'Saaremäel', year: 1992, month: 4, date: 28},
  { firstName: 'Mirjam', lastName: 'Makarov', year: 1986, month: 4, date: 28},
  { firstName: 'Siim', lastName: 'Vahter', year: null, month: 4, date: 28},
]

export const events = () => {
  return eventList
}

export const birthdays = () => {
  return birthdayList
}
