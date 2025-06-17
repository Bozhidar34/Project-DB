# Hospital Database (hospital_db)

## Общо описание

Тази MongoDB база данни `hospital_db` представлява примерна система за управление на болница. Тя съдържа информация за отделения, лекари, пациенти, прегледи и проведени лечения. Базата е структуирана с пет основни колекции, които отразяват реални взаимоотношения и данни в една болнична среда.

## Колекции и структура на документите

### 1. departments  
Колекция с отделенията в болницата.  
Примерна структура на документ:  
```json
{
  "_id": Number,
  "name": String,
  "floor": Number,
  "head": {
    "name": String,
    "phone": String (опционално),
    "email": String (опционално)
  }
}
{
  "_id": Number,
  "name": String,
  "specialty": String,
  "department_id": Number,
  "contact": {
    "email": String (опционално),
    "phone": String (опционално)
  }
}
{
  "_id": Number,
  "name": String,
  "age": Number,
  "gender": String,
  "allergies": [String] (опционално),
  "chronic_conditions": [String] (опционално),
  "address": {
    "city": String (опционално),
    "zip": String (опционално)
  }
}
{
  "patient_id": Number,
  "doctor_id": Number,
  "date": ISODate,
  "reason": String (опционално),
  "notes": String (опционално)
}
{
  "patient_id": Number,
  "diagnosis": String,
  "medication": [String],
  "doctor_id": Number
}
{
  "patient_id": Number,
  "diagnosis": String,
  "medication": [String],
  "doctor_id": Number
}
