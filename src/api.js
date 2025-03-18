const config = { 
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-34', 
    headers: { 
      authorization: '5cf250ec-4e0c-4c21-8a7d-4315c9dbd00d', 
      'Content-Type': 'application/json', 
    }, 
}; 

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const getUserData = () => { 
    return fetch(`${config.baseUrl}/users/me`, { 
      method: 'GET', 
      headers: config.headers, 
    }).then(checkResponse); 
}; 

export const getCards = () => { 
    return fetch(`${config.baseUrl}/cards`, { 
      method: 'GET', 
      headers: config.headers, 
    }).then(checkResponse); 
}; 

export const updateUserProfile = (name, about) => { 
    return fetch(`${config.baseUrl}/users/me`, { 
      method: 'PATCH', 
      headers: config.headers, 
      body: JSON.stringify({ name, about }), 
    }).then(checkResponse); 
}; 

export const updateAvatar = (avatarUrl) => { 
    return fetch(`${config.baseUrl}/users/me/avatar`, { 
      method: 'PATCH', 
      headers: config.headers, 
      body: JSON.stringify({ avatar: avatarUrl }), 
    }).then(checkResponse); 
}; 

export const addNewCard = (name, link) => { 
    return fetch(`${config.baseUrl}/cards`, { 
      method: 'POST', 
      headers: config.headers, 
      body: JSON.stringify({ name, link }), 
    }).then(checkResponse); 
}; 

export const deleteCard = (cardId) => { 
    return fetch(`${config.baseUrl}/cards/${cardId}`, { 
      method: 'DELETE', 
      headers: config.headers, 
    }).then(checkResponse); 
}; 

export const toggleLike = (cardId, isLiked) => { 
    const method = isLiked ? 'DELETE' : 'PUT'; 
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, { 
      method: method, 
      headers: config.headers, 
    }).then(checkResponse); 
};
