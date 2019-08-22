<template>
  <div id="table">
    <div class="info" v-if="!isOver">
      该
      <span>{{current === 1 ? '黑棋' : '白棋'}}</span>
      了
    </div>
    <div class="info" v-else>
      {{current === 1 ? '黑棋' : '白棋'}}
      赢了！
    </div>
    <div class="content">
      <div class="row-item" v-for="(item, rowIndex) in chessArray" :key="rowIndex">
        <div
          class="chess-item"
          v-for="(child, colIndex) in item"
          :key="colIndex"
          :class="{'first-row': rowIndex <= 0, 'first-col': colIndex <= 0}"
        >
          <span
            class="cur-chess"
            @click="playChess(rowIndex, colIndex)"
            :class="{'black-chess': child === 1, 'white-chess': child === -1}"
          ></span>
        </div>
      </div>
    </div>
    <div class="option">
      <el-button type="primary" style="margin: 0 auto" @click="restart">重新开始</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "default",
  data() {
    return {
      size: 15,
      current: 1, //1为黑棋， -1为白棋，当前下棋的是
      chessArray: null,
      direction: [[-1, 0], [-1, -1], [0, -1], [1, -1]],
      isOver: false, //是否结束了
      flag: false //避免重复点击
    };
  },
  mounted() {
    this.paintTable();
  },
  computed: {},
  methods: {
    paintTable() {
      let arrRes = [];
      if (this.size > 0) {
        for (let i = 0; i < this.size; i++) {
          let rowArr = [];
          for (let j = 0; j < this.size; j++) {
            rowArr.push(0);
          }
          arrRes.push(rowArr);
        }
        this.chessArray = arrRes;
      }
    },
    playChess(row, col) {
      let current = this.chessArray[row][col];
      if (current === 0 && !this.isOver && !this.flag) {
        this.flag = true;
        current = this.current;
        this.chessArray[row].splice(col, 1, current);

        this.judgeResult(row, col, current);
      }
    },
    judgeResult(row, col, current) {
      for (let i = 0; i < 4; i++) {
        let leftCoord = this.direction[i];
        // console.log(66666, i, this.direction[i]);
        let rightCoord = this.direction[i].map(item => -item);
        let chessArray = this.chessArray;
        let sameNum = 1;
        for (let i = 1; i < 6; i++) {
          let curRow = row + leftCoord[0] * i;
          let curCol = col + leftCoord[1] * i;
          let otherRes = chessArray[curRow] && chessArray[curRow][curCol];
          if (otherRes === current) {
            sameNum += 1;
          } else {
            break;
          }
        }
        for (let i = 1; i < 6; i++) {
          let curRow = row + rightCoord[0] * i;
          let curCol = col + rightCoord[1] * i;
          let otherRes = chessArray[curRow] && chessArray[curRow][curCol];
          if (otherRes === current) {
            sameNum += 1;
          } else {
            break;
          }
        }
        if (sameNum >= 5) {
          this.isOver = true;
          break;
        }
      }
      if (!this.isOver) {
        this.current = -this.current;
      }
      this.flag = false;
    },
    restart() {
      this.isOver = false;
      this.current = 1;
      this.paintTable();
    }
  }
};
</script>
<style lang="less" scoped>
#table {
  width: 100%;
  height: 100%;
  .info {
    width: 766px;
    margin: 20px auto;

    text-align: center;
    font-size: 30px;
  }
  .content {
    width: 766px;
    margin: 0 auto;
    .row-item {
      display: flex;
      .chess-item {
        flex: 0 0 50px;
        height: 50px;
        border-right: 2px solid #454647;
        border-bottom: 2px solid #454647;
        box-sizing: content-box;
        .cur-chess {
          display: inline-block;
          width: 30px;
          height: 30px;

          border-radius: 50%;
          cursor: pointer;

          transform: translate(-15px, -15px);
        }
        .black-chess {
          background-color: #454647;
          box-shadow: 0 0 6px rgba(0, 0, 0, 6);
        }
        .white-chess {
          background-color: #fff;
          border: 1px solid #dedede;
          box-shadow: 0 0 6px rgba(222, 222, 222, 6);
        }
      }
      .first-row {
        border-top: 2px solid #454647;
      }
      .first-col {
        border-left: 2px solid #454647;
      }
    }
  }
  .option {
    margin-top: 20px;
    text-align: center;
  }
}
</style>