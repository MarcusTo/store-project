<template>
  <div class="navbar">
    <div
      style="display: flex; justify-content: space-between; align-items: center">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/profile">Profile</RouterLink>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ul{
   list-style: none; 
   display: flex;
   gap: 16px;
}
.custom-list-item {
  margin-right: 10px;
}
</style>
