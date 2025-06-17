db.departments.find();

db.departments.find({ floor: 3 });

db.departments.find({ floor: 3, "head.name": "Dr. Ivan Ivanov" });

db.doctors.find();

db.doctors.find({ specialty: "Cardiologist" });

db.doctors.find({ specialty: "Cardiologist", "contact.email": { $exists: true } });

db.patients.find();

db.patients.find({ gender: "Female" });

db.patients.find({ gender: "Female", age: { $gt: 30 } });

db.appointments.find();

db.appointments.find({ doctor_id: 1 });

db.appointments.find({ doctor_id: 1, reason: { $exists: true } });

db.treatments.find();

db.treatments.find({ diagnosis: "Arthritis" });

db.treatments.find({ diagnosis: "Arthritis", doctor_id: 5 });

db.departments.updateOne({ _id: 1 }, { $set: { floor: 6 } });

db.doctors.updateOne({ _id: 2 }, { $set: { contact: { phone: "0899888777" } } });

db.patients.updateOne({ _id: 3 }, { $push: { allergies: "Dust" } });

db.appointments.updateOne({ patient_id: 4 }, { $set: { notes: "Follow-up required" } });

db.treatments.updateOne({ patient_id: 5 }, { $addToSet: { medication: "Physical therapy" } });

db.departments.deleteOne({ _id: 5 });

db.doctors.deleteOne({ _id: 10 });

db.patients.deleteOne({ _id: 10 });

db.appointments.deleteOne({ patient_id: 10 });

db.treatments.deleteOne({ patient_id: 10 });

db.departments.aggregate([
  { $group: { _id: "$floor", totalDepartments: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

db.doctors.aggregate([
  { $group: { _id: "$specialty", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

db.patients.aggregate([
  { $match: { age: { $gte: 30 } } },
  { $group: { _id: "$gender", avgAge: { $avg: "$age" }, count: { $sum: 1 } } }
]);

db.appointments.aggregate([
  { $match: { date: { $gte: new Date("2025-06-05") } } },
  { $sort: { date: 1 } }
]);

db.treatments.aggregate([
  { $group: { _id: "$diagnosis", totalPatients: { $sum: 1 } } },
  { $sort: { totalPatients: -1 } }
]);
