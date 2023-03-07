<template>
  <div class="grid">
    <div class="col one">
      <img
        src="https://cdn-icons-png.flaticon.com/512/9926/9926363.png"
        alt=""
      />

      <p>
        Wash hand with water and soap after toucing animals and animal products
      </p>
    </div>
    <div class="col two">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2615/2615180.png"
        alt=""
      />
      <p>
        When coughing and sneezing cover mouth and nose with fixed elbow or
        tissue
      </p>
    </div>
    <div class="col three">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5521/5521813.png"
        alt=""
      />
      <p>Avoid travel if you have a fever and cough</p>
    </div>
    <div class="col four">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5043/5043367.png"
        alt=""
      />
      <p>If you have fever, cough seek medical care early</p>
    </div>
    <div class="col five">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4026/4026294.png"
        alt=""
      />
      <p>
        If you are coughing or sneezing wear a mask and must know how to use it
        and dispose it properly
      </p>
    </div>
    <div class="col six">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1830/1830878.png"
        alt=""
      />
      <p>Eat only well cooked food</p>
    </div>
    <div class="col seven">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2002/2002526.png"
        alt=""
      />
      <p>Avoid close conatct with animals that are sick</p>
    </div>
  </div>
</template>
<script></script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
.col {
  margin: 8px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
  border-color: #ff3d32;
  border-radius: 4px;
  background-color: #4cd07d;
}
img {
  height: 100px;
}
.one {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}
.two {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 8;
  /* grid-column-end: 3; */
}
.three {
  grid-row-start: 1;
  grid-row-end: 4;
}
.four {
  grid-row-start: 4;
  grid-row-end: 12;
}
.five {
  grid-row-start: 8;
  grid-row-end: 12;
  grid-column-start: 2;
  grid-column-end: 5;
}
.six {
  grid-row-start: 4;
  grid-row-end: 8;
}
.seven {
  grid-row-start: 4;
  grid-row-end: 8;
}
</style>
