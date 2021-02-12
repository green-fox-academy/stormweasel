'use script';

window.onload = () => {
  const form = document.querySelector('form');
  localStorage.clear();

  baseCaller();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = form.name.value;
    let city = form.city.value;
    let price = form.price.value;
    let longitude = form.longitude.value;
    let latitude = form.latitude.value;
    let category = form.category.value;
    let duration = form.duration.value;
    let age = form.age.value;
    let id = localStorage.getItem('actual-id');

    const reqBody = {
      name: name, city: city, category: category, price: price,
      longitude: longitude, latitude: latitude, age: age,
      duration: duration, id: id
    };

    if (id && name && city && price && longitude &&
      latitude && category && duration && age) {
      fetch('http://localhost:3000/edit', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reqBody),
      })
        .then(response => {
          if (response.status !== 200) { throw new Error('no response'); }
          return response.json();
        })
        .then(message => {
          console.log(message);

          localStorage.clear();
          form.reset();
          location.reload();
        })
        .catch((err) => { console.log('error happend'); });

    } else if (name && city && price && longitude &&
      latitude && category && duration && age) {

      fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reqBody),
      })
        .then(response => {
          if (response.status !== 200) { throw new Error('no response'); }
          return response.json();
        })
        .then(message => {
          console.log(message);

          form.reset();
          location.reload();

        })
        .catch((err) => { console.log('error happend'); });

    } else { alert('All fields must be filled!'); }

  });

}

function baseCaller() {
  const form = document.querySelector('form');
  fetch('http://localhost:3000/places')
    .then(response => {
      if (response.status !== 200) { throw new Error('no response'); }
      return response.json();
    })
    .then(places => {
      console.log(places);
      let tableBody = document.querySelector('tbody');

      places.forEach((elem, i) => {
        let row = document.createElement('tr');;

        let name = document.createElement('td');
        name.innerHTML = `<i>${elem.attr_name}</i>`;
        window.sessionStorage.setItem(`${i}-name`, `${name.textContent}`);
        row.appendChild(name);

        let city = document.createElement('td');
        city.innerHTML = `<i>${elem.city}</i>`;
        window.sessionStorage.setItem(`${i}-city`, `${city.textContent}`);
        row.appendChild(city);

        let price = document.createElement('td');
        price.innerHTML = `<i>${elem.price}</i>`;
        window.sessionStorage.setItem(`${i}-price`, `${price.textContent}`);
        row.appendChild(price);

        let longitude = document.createElement('td');
        longitude.innerHTML = `<i>${elem.longitude}</i>`;
        window.sessionStorage.setItem(`${i}-longitude`, `${longitude.textContent}`);
        row.appendChild(longitude);

        let latitude = document.createElement('td');
        latitude.innerHTML = `<i>${elem.latitude}</i>`;
        window.sessionStorage.setItem(`${i}-latitude`, `${latitude.textContent}`);
        row.appendChild(latitude);

        let category = document.createElement('td');
        category.innerHTML = `<i>${elem.category}</i>`;
        window.sessionStorage.setItem(`${i}-category`, `${category.textContent}`);
        row.appendChild(category);

        let duration = document.createElement('td');
        duration.innerHTML = `<i>${elem.duration}</i>`;
        window.sessionStorage.setItem(`${i}-duration`, `${duration.textContent}`);
        row.appendChild(duration);

        let age = document.createElement('td');
        age.innerHTML = `<i>${elem.recommended_age}</i>`;
        window.sessionStorage.setItem(`${i}-age`, `${age.textContent}`);
        row.appendChild(age);

        let editButton = document.createElement('button');
        editButton.innerHTML = '<a href=""></a>Edit';
        row.appendChild(editButton);

        window.localStorage.setItem(`${elem.attr_name}-id`, `${elem.id}`);
        // row.append(name,city,price,category, longitude, latitude, duration, age, editButton);
        tableBody.appendChild(row);


        editButton.onclick = () => {

          form.name.value = sessionStorage.getItem(`${i}-name`);
          form.city.value = sessionStorage.getItem(`${i}-city`);
          form.price.value = sessionStorage.getItem(`${i}-price`);
          form.longitude.value = sessionStorage.getItem(`${i}-longitude`);
          form.latitude.value = sessionStorage.getItem(`${i}-latitude`);
          form.category.value = sessionStorage.getItem(`${i}-category`);
          form.duration.value = sessionStorage.getItem(`${i}-duration`);
          form.age.value = sessionStorage.getItem(`${i}-age`);
          actualId = localStorage.getItem(`${form.name.value}-id`);
          console.log(actualId);
          window.localStorage.setItem(`actual-id`, actualId);
        }
      })
    })
    .catch((err) => { console.log('error happend'); });
}