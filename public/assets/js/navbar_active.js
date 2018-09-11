var pathname = window.location.pathname;
if (pathname.match('queue/home.php') != null)
    $('.queue_home').addClass('active');
else if (pathname.match('queue/queue.php') != null)
    $('.queue_queue').addClass('active');
else if (pathname.match('queue/appointment.php') != null)
    $('.queue_appointment').addClass('active');
else if (pathname.match('doctor/queue.php') != null)
    $('.doctor_queue').addClass('active');
else if (pathname.match('queue/patient.php') != null)
    $('.doctor_patient').addClass('active');
else if (pathname.match('drug/home.php') != null)
    $('.drug_home').addClass('active');
else if (pathname.match('drug/drug.php') != null)
    $('.drug_drug').addClass('active');
else if (pathname.match('icd_code_map/home.php') != null)
    $('.icd_code_map_home').addClass('active');
else if (pathname.match('doctor/home.php') != null)
    $('.nav-doctor_queue').addClass('active');
else if (pathname.match('doctor/patient.php') != null)
    $('.nav-doctor_patient').addClass('active');
else if (pathname.match('doctor/today_patient_history.php') != null)
    $('.nav-today_patient_history').addClass('active');
else if (pathname.match('doctor/medical_certificate.php') != null)
    $('.nav-medical_certificate').addClass('active');
else if (pathname.match('drug/patient.php') != null)
    $('.nav-drug_patient').addClass('active');
