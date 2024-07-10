import React from "react";

const Cards = ({ data }) => {
  return (
    <div
      className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      onMouseOver={() => (document.body.style.cursor = "pointer")}
      onMouseOut={() => (document.body.style.cursor = "default")}
    >
      <div className="grid sm:grid-cols-6">
        <div className="col-span-2">
          <img
            className="h-20 w-20"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///9HRUY9OzxCQEHs7OyxsLCrq6tubm4uKyxLSUp9fH3o5+g6ODnV1dXy8vIyMDH5+fnFxMVSUVJiYGHf39+SkZKZmJmhoaFpaGl4dncpJijOzs4hHiC8vLyMi4tbWloPCgwp9xXNAAAEhElEQVR4nO2c65KrKhBGBUy8IeItXnLb7/+UWzSjZkL2Gc0kQp1v/ZiqSVlWrwK6oWN0HAAAAAAAAAAAAAAAAAAAgN8kKiJXCLl1GL/CMUiCOix3aayk7HaSYUIY5dxPSFaHh/35GBeurUrycOKM9CgnTknmhXuxdVgriaowJ37r85sT65zIeeuo1iLdIo7TXdlcue8PRuywdVCvIYVwoyKtMmVDL7aumjny0E81Gtq6aGaIkg8ydbF1KC8jyqRbL3lA2PW4dSyvIg5+NyiZuFKWWZvObvQuPC+ckBO22zqa1xhc6thxqoTwautwXkKWysXrXJxzS3hpc26Wau334+I4xYnw0N06ovXIkqr1Eg//nAj17M3NnQsjLLsJyG5/do23jWg9UtVKxsbBqCkL0i0DegGh1j5l0yrp3LjZhUYcC32GGlyyaPpk7xN//6GwVuGGpz+VzkYckqFWThy73HwweKsZhV26SqrHCAeX+41l0cmE0cOlphBdaH/oerDp95ZDrZxdTQlvjJWJQqaWOGHkm428TLVy/unJ105JExBqjvlhoGzu1oK8cI1Lt8DS1NQlIz3l0kRFd8BnbGYzuORW1ce8CzlRa6DglDA+TiCpFhLPrNq4KJfbeo6ZymmHwaY/I9/VF+MRtQr5K9HGWWfT9jZDHgts2h27zdyls8lvNoOLVePS10o6L4CDTeWqWklzm9bLUPfv699R2fBQn5MNRudys6GPdd9sopBrXLqZdlV7G7tc3EaNi27DGAfUsjkmnrp01ZOc7GrA1vo5NiAKU/deOmRf95cdSkS6248YtNPs6/6yM4kI29afaFtTjmeux7/Vyv+kIAm5J6FGpIg+Jy9zcTNKvkOZAWMz1Mpls6R8dOnm6eVdIf6Y/oycLGsWR1emkSFk6/wdDWfkZTMkzbQybONWoKqVwVIXZxdoB4Zt3ApUObld3CcyUyb4V91/joky8trn5OVHYQNl+lrJ1lRu82QitU9e5WKeTJ+TVza8TZNRLsHa3aFhMuLAVQ92ZRvMMJnI48tr5YhhMrI6ndafQAyTceTxhcOhaTIvARlTsU1GRvGM6P4rS8tkisrrv9Mk6g8LvOruEGmVjDznCWUzaJKfZ4NjlUz62Hyh2exZH5tkopo/RsrrqcbaJHP+3uDrSaZ2hUUy4qKXuYxbBotkXE/X4iPUG/fYkNkGyEDmA0AGMh8AMpD5AJCBzG8FHKcT8X070DIZsQ/zbCIP9/Pui10yUcP4vF3BOGlmg2OVjNQc8XljqUylOxXT6aeWNskIfSDXcaLZJJPqHxWZfgNnk8xO/xBPMP4+2SaZPWQgAxnIQAYykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYy/zsZEU241ROZyr1dEdd6mToeb/FEZryF4k3vCCrKJpzItYEQkn9d0Dx53UfW/PgW6i7lW951Iiufz9APTBfs1wXacenH5se3ULznrafi0j4L7520l7dMtPg6f0fUh2jf9apw4W6AOS8JAwAAAAAAAAAAAAAAAAAs4y80ZFt1FWSNFQAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="col-span-2 flex flex-col flex-grow justify-around">
          <h1 className="text-xl font-bold w-full">{data.name}</h1>
          <p className="w-full text-xs">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
