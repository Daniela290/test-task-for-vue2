<template>
  <div class="question">
    <h3 class="question__title">
      1. Укажите, пожалуйста, куда планируете ставить Окна?
    </h3>
    <div class="question__content">
      <div
        class="type-room"
        v-for="el in typeOfRooms"
        :key="el.title"
        @click="changeType(el)"
      >
        <img :src="require(`../../assets/images/question1/${el.img}`)" alt="" />
        <div>
          <QuestionCheckBox :val="el.isChecked" />
          <p>{{ el.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCheckBox from "./components/QuestionCheckBox.vue";
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "CHENGE_IS_CAN_NEW_STEP",
      "CHENGE_MESSAGE",
      "CHENGE_TYPE_OF_ROOMS",
    ]),
    changeType(type) {
      const index = this.typeOfRooms.indexOf(type);
      if (index !== -1) {
        this.CHENGE_TYPE_OF_ROOMS(index);
      }
      const isCanNewStep = this.typeOfRooms.some((el) => el.isChecked === true);
      this.CHENGE_IS_CAN_NEW_STEP(isCanNewStep);
      if (!this.isCanNewStep) {
        this.CHENGE_MESSAGE("Вы должны выбрать хотя бы 1 вид помещений");
      } else this.CHENGE_MESSAGE("");
    },
  },
  mounted() {
    this.changeType();
  },
  computed: {
    ...mapState(["typeOfRooms", "isCanNewStep"]),
  },
  components: { QuestionCheckBox },
};
</script>

<style scoped lang="scss">
.question {
  &__content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    justify-content: space-between;
  }
}
.type-room {
  width: 150px;
  height: 156px;
  box-sizing: border-box;
  > img {
    cursor: pointer;
  }
  > div {
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #2a3135;
      margin: 0;
      max-width: 100%;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 670px) {
  .question {
  &__content {
    justify-content: space-around;
  }
}
  .type-room {
    margin: 10px 7.5px;
  }
}

@media screen and (max-width: 450px) {
  .type-room {
    > div {
      margin-top: 0px;
      flex-direction: row;
      justify-content: flex-start;
      > p {
        text-align: left;
        margin-left: 15px;
      }
    }
    > img {
      display: none;
    }
    height: auto;
    width: 100%;
  }
}
</style>
