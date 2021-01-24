const button_send_data = document.getElementById('send_data');
const form = document.getElementById('form');

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

button_send_data.addEventListener('click', function send_vacant() {
  //  Message id
  const server_message_container = document.getElementById('message');

  //  Vacant info
  const title = document.getElementById('title').value.toLowerCase();
  const vacant_url = document.getElementById('url').value;
  const techologies = document
    .getElementById('techologies')
    .value.split(',')
    .map((tec) => tec.toLowerCase());
  const languages = document
    .getElementById('languages')
    .value.split(',')
    .map((lang) => lang.toLowerCase());
  const english_level = document.getElementById('english').value;
  const presencial_or_remote = document.getElementById('precencial').value;
  const salary = document.getElementById('salary').value;

  const salary_range = salary.split(',').map((number) => parseInt(number));

  //  Full vacant
  const vacant = {
    title,
    vacant_url,
    techologies,
    languages,
    english_level,
    remote: presencial_or_remote === 'precencial' ? false : true,
    salary_range,
  };

  form.reset();

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(vacant),
    redirect: 'follow',
  };

  window
    .fetch('/create-vacant', requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const message_element = document.createElement('h1');
      message_element.textContent = 'Error:' + data.error + ', ' + data.message;
      server_message_container.append(message_element);
    });
});
