<template>
  <user-layout :isLoading="loadstat">
    <div class="uk-section">
      <div class="uk-container">
        <h6>
          Welcome <small>{{ user.full_name }}</small>
        </h6>
        <div class="balance-box uk-background-contain">
          <h3 id="bal-title">Avialable Balance</h3>

          <a href="/withdraw-funds" class="fund-acc">
            <h5>Withdraw <span class="fas fa-plus"></span></h5>
          </a>

          <h1 id="bal">${{ user.balance.toFixed(2) }}</h1>
          <ul class="account-info">
            <li>
              <p>User Id</p>
              <h4>{{ user.username }}</h4>
            </li>
            <!-- <li>
              <p>Account Type</p>
              <h4>Real</h4>
            </li> -->
            <li>
              <p>Account Status</p>
              <h4>Active</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="uk-section none">
      <div class="uk-container">
        <div>
          <div class="spend-box">
            <div class="">
              <div class="uk-card uk-box-shadow-small uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Spending</h3>

                <div class="in-box">
                  <div class="chbox uk-text-center">
                    <img src="@/assets/images/spritei.png" alt="" class="barpng" />
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>Deposit Balance</h5>
                        <p><strong>$</strong>{{ user.total_deposit }}</p>
                      </li>
                      <li>
                        <h5>Total Withdraw</h5>
                        <p><strong>$</strong>{{ user.total_withdraw }}</p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="io-investbox">
              <div class="uk-card uk-box-shadow-small uk-card-hover uk-card-body">
                <div class="io-investinfo">
                  <div id="timerblock">
                    <div class="base-timer">
                      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                          <path id="base-timer-path-remaining" stroke-dasharray="283" :class="[
                            'base-timer__path-remaining',
                            remainingPathColor,
                          ]" d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                      "></path>
                        </g>
                      </svg>
                      <span id="base-timer-label" class="base-timer__label">formatTime( timeLeft )</span>
                    </div>
                  </div>
                  <div class="tip-balance">
                    <ul v-if="invest == null">
                      <li>
                        <h4>Amount Invested :</h4>
                        <p>$#000</p>
                      </li>
                      <li>
                        <h4>Package :</h4>
                        <p>$#000</p>
                      </li>
                      <li>
                        <h4>Start Date :</h4>
                        <p>$#000</p>
                      </li>
                      <li>
                        <h4>Status :</h4>
                        <p>$#000</p>
                      </li>
                      <li>
                        <h4>No current Investment</h4>
                      </li>

                      <!-- <li>
                        <router-link
                          to="/create-investment/"
                          class="uk-button uk-button-primary btn-red mt-2"
                          >Invest</router-link
                        >
                      </li> -->
                    </ul>
                    <ul v-else>
                      <li>
                        <h4>Amount Invested :</h4>
                        <p>${{ invest.amount_invested }}</p>
                      </li>
                      <li>
                        <h4>Package :</h4>
                        <p>{{ invest.package.name }}</p>
                      </li>
                      <li>
                        <h4>Start Date :</h4>
                        <p>{{ invest.start_date }}</p>
                      </li>
                      <li>
                        <h4>Status :</h4>
                        <p :class="[
                          invest.status == 'active'
                            ? 'uk-text-success'
                            : 'uk-text-warning',
                        ]">
                          {{ invest.status }}
                        </p>
                      </li>

                      <!-- <li v-if="invest.status === 'completed'">
                        <router-link
                          to="/create-investment/"
                          class="uk-button uk-button-primary btn-red mt-2"
                          >Invest</router-link
                        >
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container">
        <div></div>
      </div>
    </div>
  </user-layout>
</template>

<script>
import UserLayout from "@/layouts/UserLayout.vue";
import initialize from "@/services";
const toastr = new window.Toastr();

export default {
  name: "UserDashboard",
  components: {
    UserLayout,
  },
  data() {
    return {
      loadstat: true,
      user: [],
      invest: [],
      FULL_DASH_ARRAY: 283,
      WARNING_THRESHOLD: 10,
      ALERT_THRESHOLD: 5,
      COLOR_CODES: {
        info: {
          color: "green",
        },
        warning: {
          color: "orange",
          threshold: this.WARNING_THRESHOLD,
        },
        alert: {
          color: "red",
          threshold: this.ALERT_THRESHOLD,
        },
      },
      TIME_LIMIT: 0,
      timePassed: 0,
      timeLeft: this.TIME_LIMIT,
      timerInterval: null,
      remainingPathColor: "green",

      endDATE: null,
    };
  },
  created() {
    //  this.shwoBasetimer()
  },
  async mounted() {
    initialize.setupajax(this.$store.state.token);
    document.title = "Dashboard";

    await window.$.get("https://earnalipay.org/dashboard/", (data) => {
      this.user = data.user_details;

      this.invest = data.invest;
      var now = new Date().getTime();

      if (this.invest != null && this.invest.status == "active") {
        var end_date = Date.parse(data.invest.end_date);
        var distance = end_date - now;
        var seconds = Math.floor(distance / 1000);
        this.TIME_LIMIT = seconds;
        this.endDATE = end_date;
        this.startTimer();
      }

      //console.log(seconds)
    });
    this.loadstat = false;
  },
  methods: {
    // showCountdown(end_date){

    //     var endDate = Date.parse(end_date)

    // }
    // shwoBasetimer(){
    //         document.getElementById("timerblock").innerHTML = `

    //           `;

    // },

    onTimesUp() {
      clearInterval(this.timerInterval);
      window.$.post(
        "https://earnalipay.org/end-investment/",
        { ping: "PONG" },
        (data) => {
          toastr.success(`${data.msg}`);
          this.invest = data.invest;
          this.user = data.invest.user;
        }
      );
    },

    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timePassed = this.timePassed += 1;
        this.timeLeft = this.TIME_LIMIT - this.timePassed;

        var now = new Date().getTime();
        var distance = this.endDATE - now;

        document.getElementById("base-timer-label").innerHTML =
          this.formatTime(distance);
        this.setCircleDasharray();
        this.setRemainingPathColor(this.timeLeft);

        if (distance < 0) {
          this.onTimesUp();
        }
      }, 1000);
    },

    formatTime(time) {
      var days = Math.floor(time / (1000 * 60 * 60 * 24));
      var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((time % (1000 * 60)) / 1000);

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${days}d:${hours}h:${minutes}m:${seconds}s`;
    },

    setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = this.COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    },

    calculateTimeFraction() {
      const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
      return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
    },

    setCircleDasharray() {
      const circleDasharray = `${(
        this.calculateTimeFraction() * this.FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    },
  },
};
</script>

<style scoped>
.barpng {
  width: 113px;
}

.base-timer {
  position: relative;
  width: 230px;
  height: 230px;
}

.base-timer__svg {
  transform: scaleX(-1);
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.base-timer__path-remaining.green {
  color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
  color: orange;
}

.base-timer__path-remaining.red {
  color: red;
}

.base-timer__label {
  position: absolute;
  width: 245px;
  height: 245px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
}

.uk-section.none {
  padding-top: 10px;
  padding-bottom: 10px;
}

.in-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.in-box ul {
  margin: 0;
  padding: 0;
}

.in-box ul li {
  text-align: center;
  padding: 11px;
}

.in-box ul li h5 {
  margin-bottom: 5px;
}

.in-box ul li p {
  margin: 0;
}

.spend-box .uk-card {
  background-color: #fff;
  box-shadow: 0 14px 25px rgb(0 0 0 / 16%);
}

.balance-box {
  background-image: url("@/assets/images/in-profit-decor-3.svg");
}

.uk-grid-medium {
  margin: 0 !important;
}

.spend-box {
  display: flex;
  width: 100%;
  align-items: center;
}

.spend-box>div {
  width: 40%;
}

.spend-box div.io-investbox {
  width: 60%;

  margin-left: 10px;
}

.chbox {
  width: 100%;
  margin-bottom: 15px;
}

.io-investinfo {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.tip-balance ul li {
  display: flex;
  justify-content: space-between;
}

.tip-balance ul li p {
  margin-left: 60px;

  margin-top: 0px;
  color: #212529;
}

@media (max-width: 789px) {
  .spend-box {
    flex-direction: column;
  }

  .spend-box>div {
    width: 100%;
  }

  .spend-box div.io-investbox {
    width: 100%;

    margin-left: 0;
    margin-top: 10px;
  }

  .base-timer {
    width: 112px;
    height: 111px;
  }

  .base-timer__label {
    width: 113px;
    height: 118px;
    font-size: 11px;
  }

  .tip-balance ul li h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 378px) {
  .tip-balance ul li h4 {
    font-size: 11.2px;
  }
}
</style>