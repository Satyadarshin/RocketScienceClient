<template>
     <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <slot name="body">
                            <app-recommended-novel :novel="selectedNovel"></app-recommended-novel>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="$emit('close')">Close</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import recommendedNovel from '@/components/RecommendedNovel';

export default {
  props: {
    focus: Number,
  },
  data() {
    return {
      selectedNovel: '',
    };
  },
  components: {
    appRecommendedNovel: recommendedNovel,
  },
  created() {
    this.selectedNovel = this.focus
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

// .modal-wrapper {
//   display: table-cell;
//   vertical-align: middle;
// }

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  padding: 1.5rem 1.5rem 0 1.5rem;
  img {
    display: block;
  }
}

.modal-footer {
  border-top: 1px solid silver;
  padding: .5rem 1.5rem;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
