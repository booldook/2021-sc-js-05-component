<template>
	<div>
		<div class="daily-wrapper" v-show="daily ? true : false">
			<div class="city-wrap">{{ city }}, {{ country }}</div>
			<div class="icon-wrap">
				<img v-bind:src="icon" alt="아이콘">
			</div>
			<div class="temp-wrap">{{ temp }} ℃</div>
			<div class="desc-wrap">{{ main }} / {{ desc }} </div>
		</div>
		<div class="comment-wrapper" v-show="daily ? false : true">
			날씨정보를 보시려면 위치정보를 켜주세요.
		</div>
	</div>
</template>

<script>
/**
 * url: https://openweathermap.com
 * appid: 02efdd64bdc14b279bc91d9247db4722 (꼭 본인거)
 * daily: https://api.openweathermap.org/data/2.5/weather
 * 5days: https://api.openweathermap.org/data/2.5/forecast
 * test: https://api.openweathermap.org/data/2.5/weather?appid=02efdd64bdc14b279bc91d9247db4722&units=metric&lat=37.555275&lon=126.936924
 * icon url: http://openweathermap.org/img/wn/10d@2x.png
 * 
 * ! name: '',				// 이름(명시적)
 * ! components: {},	// 내가 사용할 컴포넌트들을 나열
 * ? props: [],				// 부모로부터 전달받는 변수
 * ! data() {},				// 내가 사용할 변수들을 나열
 * ! created() {},		// 내가 시작될 때 한번 실행함 === $(document).ready() / window.load()
 * ? computed: {},		// 변수의 변경을 추적
 * ? watch: {},				// 변수의 변경을 추적
 * ! methods: {}			// 내가 사용할 함수들을 나열
 */

const appid = '02efdd64bdc14b279bc91d9247db4722';
const dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
const icons = ['http://openweathermap.org/img/wn/', '@2x.png'];
const units = 'metric';

import axios from 'axios';

export default {
	name: 'Weather',
	components: {},
	props: [],
	data() {	// 시간에 따라 변하는 데이터
		return {
			lat: '',
			lon: '',
			daily: null
		}
	},
	created() {
		navigator.geolocation.getCurrentPosition(async geo => {
			let { latitude: lat, longitude: lon } = geo.coords;
			this.lat = lat;
			this.lon = lon;
			let { data } = await axios.get(dailyURL, { params: { appid, lat, lon, units } });
			this.daily = data;
			console.log(this.daily)
		}, err => {
			console.log(err)
		})
	},
	computed: {
		icon: function() {
			return this.daily ? icons[0] + this.daily.weather[0].icon + icons[1] : '';
		},
		city: function() {
			return this.daily ? this.daily.name : '';
		},
		country: function() {
			return this.daily ? this.daily.sys.country : '';
		},
		temp: function() {
			return this.daily ? this.daily.main.temp : '';
		},
		main: function() {
			return this.daily ? this.daily.weather[0].main : '';
		},
		desc: function() {
			return this.daily ? this.daily.weather[0].description : '';
		}
	},
	watch: {},
	methods: {}
}
</script>

<style lang="scss">
.daily-wrapper {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.city-wrap {font-size: 2em;}
	.temp-wrap {font-size: 2.5em; padding: .25em 0;}
	.desc-wrap {font-size: 1.5em;}
}
.comment-wrapper {
	font-size: 1.5em;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>