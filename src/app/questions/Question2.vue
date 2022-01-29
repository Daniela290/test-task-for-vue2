<template>
  <div class="question">
    <h3 class="question__title">2. Какой тип остекления интересует?</h3>

    <div class="question__content">
      <div
        class="type-glass"
        v-for="el in typeOfGlazing"
        :key="el.title"
        :class="{ 'type-glass--checked': el.isChecked }"
        @click="changeType(el)"
      >
        <p>{{ el.title }}</p>
        <div>
          <input name="glass" type="radio" :checked="el.isChecked" />
          <label></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["typeOfGlazing", "isCanNewStep"]),
  },
  methods: {
    ...mapMutations([
      "CHENGE_TYPE_OF_CLAGING",
      "CHENGE_IS_CAN_NEW_STEP",
      "CHENGE_MESSAGE",
    ]),
    changeType(type) {
      const index = this.typeOfGlazing.indexOf(type);
      if (index !== -1) {
        this.CHENGE_TYPE_OF_CLAGING(index);
      }
      const isCanNewStep = this.typeOfGlazing.some(
        (el) => el.isChecked === true
      );
      this.CHENGE_IS_CAN_NEW_STEP(isCanNewStep);
      if (!this.isCanNewStep) {
        this.CHENGE_MESSAGE("Вы должны выбрать вид застекления");
      } else this.CHENGE_MESSAGE("");
    },
  },
  mounted() {
    this.changeType();
  },
};
</script>

<style lang="scss" scoped>
.question {
  &__content {
    display: flex;
    flex-direction: column;
    align-content: center;
    //gap: 32px;
    margin-top: 28px;
    margin-bottom: 20px;
    align-items: center;
  }
}

.type-glass {
  margin-bottom: 30px;
  width: 360px;
  height: 70px;
  box-shadow: 0px 6px 20px rgba(42, 49, 53, 0.12);
  border-radius: 10px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  cursor: pointer;
  > p {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #2a3135;
  }
  &--checked {
    background: linear-gradient(90deg, #fec026 0%, #ffd52f 100%) !important;
  }

  > div {
    position: absolute;
    bottom: -14px;
    left: 168px;
  }

  &:hover {
    background: linear-gradient(
      120deg,
      rgba(#fec026, 0.8),
      rgba(#ffd52f, 0.7),
      rgba(#ffffff, 0.2),
      rgba(#b9b8b5, 0.1),
      rgba(#fec026, 0.8)
    );
    background-size: 200% 200%;
    animation: question2Animate 600ms ease;
  }
  @keyframes question2Animate {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 192% 90%;
    }
  }
}
@media screen and (max-width:750px) {
  .type-glass {
    &:hover{
      background: none;
      animation: none;
    }
  }
}
@media screen and (max-width: 500px) {
  .type-glass {
    width: 100%;
    height: auto;
    padding: 10px 10px;

    > div {
      left: calc((100% - 20px) / 2);
    }
  }
}
</style>
