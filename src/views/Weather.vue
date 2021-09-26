<template>
	<div>
		
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
const icon = ['http://openweathermap.org/img/wn/', '@2x.png'];
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
			icon: '',
			weather: null
		}
	},
	created() {
		navigator.geolocation.getCurrentPosition(geo => {
			let { latitude: lat, longitude: lon } = geo.coords;
			this.lat = lat;
			this.lon = lon;
			axios.get(dailyURL, { params: { appid, lat, lon, units } }).then(r => {
				console.log(r)
			})
		}, err => {
			console.log(err)
		})
	},
	computed: {},
	watch: {},
	methods: {}
}
</script>

<style>

</style>