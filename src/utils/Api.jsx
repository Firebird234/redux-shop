export function GetItems(url) {
  return fetch(url, {
    "Content-Type": "application/json",
  }).then((res) => checkResponse(res));
}

export function GetCategories(url) {
  return fetch(url, {
    "Content-Type": "application/json",
  }).then((res) => checkResponse(res));
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибочка: ${res.status}`);
}
