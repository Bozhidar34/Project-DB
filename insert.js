db.departments.insertMany([
  {
    _id: 1,
    name: "Cardiology",
    floor: 3,
    head: { name: "Dr. Ivan Ivanov", phone: "0888123456", email: "ivanov@hospital.bg" }
  },
  {
    _id: 2,
    name: "Neurology",
    floor: 4,
    head: { name: "Dr. Maria Petrova", phone: "0888765432", email: "petrova@hospital.bg" }
  },
  {
    _id: 3,
    name: "Pediatrics",
    floor: 2,
    head: { name: "Dr. Georgi Georgiev" }
  },
  {
    _id: 4,
    name: "Oncology",
    floor: 5,
    head: { name: "Dr. Elena Dimitrova", email: "elena@hospital.bg" }
  },
  {
    _id: 5,
    name: "Orthopedics",
    floor: 1,
    head: { name: "Dr. Nikolay Stoyanov", phone: "0899000111" }
  },
]);

db.doctors.insertMany([
  { _id: 1, name: "Dr. Ivan Ivanov", specialty: "Cardiologist", department_id: 1, contact: { email: "ivanov@hospital.bg", phone: "0888123456" } },
  { _id: 2, name: "Dr. Maria Petrova", specialty: "Neurologist", department_id: 2, contact: { phone: "0888765432" } },
  { _id: 3, name: "Dr. Georgi Georgiev", specialty: "Pediatrician", department_id: 3 },
  { _id: 4, name: "Dr. Elena Dimitrova", specialty: "Oncologist", department_id: 4, contact: { email: "elena@hospital.bg" } },
  { _id: 5, name: "Dr. Nikolay Stoyanov", specialty: "Orthopedic Surgeon", department_id: 5, contact: {} },
  { _id: 6, name: "Dr. Stefan Kolev", specialty: "Cardiologist", department_id: 1 },
  { _id: 7, name: "Dr. Petya Marinova", specialty: "Neurologist", department_id: 2, contact: { email: "petya@hospital.bg" } },
  { _id: 8, name: "Dr. Anna Dimitrova", specialty: "Pediatrician", department_id: 3, contact: { phone: "0888999888" } },
  { _id: 9, name: "Dr. Kaloyan Ivanov", specialty: "Oncologist", department_id: 4 },
  { _id: 10, name: "Dr. Miroslav Georgiev", specialty: "Orthopedic Surgeon", department_id: 5 }
]);

db.patients.insertMany([
  { _id: 1, name: "Petar Petrov", age: 45, gender: "Male", allergies: ["Penicillin"], chronic_conditions: ["Hypertension"], address: { city: "Sofia", zip: "1000" } },
  { _id: 2, name: "Maria Ivanova", age: 30, gender: "Female", allergies: [], chronic_conditions: [], address: { city: "Plovdiv" } },
  { _id: 3, name: "Georgi Dimitrov", age: 60, gender: "Male", allergies: ["Peanuts"], chronic_conditions: ["Diabetes"], address: { city: "Varna" } },
  { _id: 4, name: "Elena Stoyanova", age: 25, gender: "Female", allergies: ["Latex"], chronic_conditions: [], address: { city: "Burgas", zip: "8000" } },
  { _id: 5, name: "Ivan Kolev", age: 50, gender: "Male", allergies: [], chronic_conditions: ["Asthma"], address: { city: "Ruse" } },
  { _id: 6, name: "Petya Nikolova", age: 40, gender: "Female", allergies: ["Pollen"], chronic_conditions: [], address: { city: "Sofia" } },
  { _id: 7, name: "Kiril Marinov", age: 35, gender: "Male", allergies: [], chronic_conditions: ["Arthritis"], address: { city: "Plovdiv" } },
  { _id: 8, name: "Ani Dimitrova", age: 29, gender: "Female", allergies: ["Seafood"], chronic_conditions: [], address: { city: "Varna" } },
  { _id: 9, name: "Dimitar Petrov", age: 55, gender: "Male", allergies: ["Penicillin"], chronic_conditions: ["Hypertension", "Diabetes"], address: { city: "Sofia", zip: "1000" } },
  { _id: 10, name: "Vesela Georgieva", age: 32, gender: "Female", allergies: [], chronic_conditions: [], address: { city: "Burgas" } }
]);

db.appointments.insertMany([
  { patient_id: 1, doctor_id: 1, date: new Date("2025-06-01T09:00:00Z"), reason: "Chest pain", notes: "EKG performed" },
  { patient_id: 2, doctor_id: 2, date: new Date("2025-06-02T10:30:00Z"), reason: "Headache" },
  { patient_id: 3, doctor_id: 3, date: new Date("2025-06-03T14:00:00Z") },
  { patient_id: 4, doctor_id: 4, date: new Date("2025-06-04T08:30:00Z"), notes: "MRI scheduled" },
  { patient_id: 5, doctor_id: 5, date: new Date("2025-06-05T11:00:00Z"), reason: "Knee pain" },
  { patient_id: 6, doctor_id: 1, date: new Date("2025-06-06T09:30:00Z") },
  { patient_id: 7, doctor_id: 2, date: new Date("2025-06-07T15:00:00Z"), reason: "Dizziness" },
  { patient_id: 8, doctor_id: 3, date: new Date("2025-06-08T13:00:00Z") },
  { patient_id: 9, doctor_id: 4, date: new Date("2025-06-09T10:00:00Z") },
  { patient_id: 10, doctor_id: 5, date: new Date("2025-06-10T12:00:00Z"), notes: "Physical therapy recommended" }
]);

db.treatments.insertMany([
  { patient_id: 1, diagnosis: "Angina", medication: ["Nitroglycerin", "Aspirin"], doctor_id: 1 },
  { patient_id: 2, diagnosis: "Migraine", medication: ["Ibuprofen"], doctor_id: 2 },
  { patient_id: 3, diagnosis: "Flu", medication: ["Paracetamol", "Rest"], doctor_id: 3 },
  { patient_id: 4, diagnosis: "Brain tumor", medication: ["Chemotherapy"], doctor_id: 4 },
  { patient_id: 5, diagnosis: "Arthritis", medication: ["Ibuprofen", "Physical therapy"], doctor_id: 5 },
  { patient_id: 6, diagnosis: "Hypertension", medication: ["Lisinopril"], doctor_id: 1 },
  { patient_id: 7, diagnosis: "Stroke", medication: ["Aspirin"], doctor_id: 2 },
  { patient_id: 8, diagnosis: "Bronchitis", medication: ["Antibiotics"], doctor_id: 3 },
  { patient_id: 9, diagnosis: "Lung cancer", medication: ["Radiation therapy"], doctor_id: 4 },
  { patient_id: 10, diagnosis: "Fracture", medication: ["Cast", "Painkillers"], doctor_id: 5 }
]);
