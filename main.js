// db.collection('contact').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data());
//   });
// });

const form = document.querySelector('#contactForm');

function addData(name, email, phone, company, message) {
  db.collection('contact').add({
    name: name,
    email: email,
    phone: phone,
    company: company,
    message: message
  })
    .then(_ => swal({
      title: 'Thanks For Contacting Us!',
      text: 'We will reach to you as soon as possible',
      icon: 'success'
    }))
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value;
  const company = form.company.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const message = form.message.value;
  addData(name, email, phone, company, message);
  [form.name, form.company, form.email, form.phone, form.message].forEach(el => el.value = '');
});




