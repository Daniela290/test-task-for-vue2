<template>
  <div class="question">
    <h3 class="question__title">3. Выберите дополнительную фурнитуру</h3>

    <div class="question__content">
      <div
        class="accessories"
        v-for="el in accessories"
        :key="el.title"
        @click="changeType(el)"
      >
        <img :src="require(`../../assets/images/question3/${el.img}`)" alt="" />
        <div>
          <QuestionCheckBox :val="el.isChecked" />
        </div>
        <p>{{ el.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCheckBox from "./components/QuestionCheckBox.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { QuestionCheckBox },
  computed: {
    ...mapState(["accessories", "isCanNewStep"]),
  },
  methods: {
    ...mapMutations([
      "CHANGE_ACCESSORIES",
      "CHANGE_IS_CAN_NEW_STEP",
      "CHANGE_MESSAGE",
    ]),
    changeType(type) {
      const index = this.accessories.indexOf(type);
      if (index !== -1) {
        this.CHANGE_ACCESSORIES(index);
      }
      const isCanNewStep = this.accessories.some((el) => el.isChecked === true);
      this.CHANGE_IS_CAN_NEW_STEP(isCanNewStep);
      if (!this.isCanNewStep) {
        this.CHANGE_MESSAGE("Вы должны выбрать необходимую фурнитуру");
      } else this.CHANGE_MESSAGE("");
    },
  },
  mounted() {
    this.changeType();
  }
};
</script>

<style lang="scss">
.question {
  &__content {
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
  }
}
.accessories {
  position: relative;
  margin-bottom: 10px;
  width: max-content;
  cursor: pointer;
  > div {
    position: absolute;
    right: -14px;
    top: 48px;
    label::before {
      background: #ffff;
    }
  }
  > p {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #2a3135;
    margin: 7px 0 10px 0;
  }
}

@media screen and (max-width: 500px) {
  .question {
    &__content {
      margin-bottom: 10px;
    }
  }
  .accessories {
    width: 100%;
    > img {
      display: none;
    }
    > div {
      top: 0;
      right: 10px;
    }
  }
}
</style>
