const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-34',
    headers: {
      authorization: '5cf250ec-4e0c-4c21-8a7d-4315c9dbd00d',
      'Content-Type': 'application/json',
    },
  };
  
  export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при получении данных пользователя: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  export const getCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при получении карточек: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  export const updateUserProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({ name, about }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при обновлении данных пользователя: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message); 
      });
  };
  
  export const updateAvatar = (avatarUrl) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при обновлении аватара: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  export const addNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({ name, link }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при добавлении карточки: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  export const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при удалении карточки: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  export const toggleLike = (cardId, isLiked) => {
    const method = isLiked ? 'DELETE' : 'PUT';
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: config.headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при изменении лайка: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  