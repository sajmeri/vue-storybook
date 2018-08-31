<template>
	<div id="videoslider">
		<div class="container mx-auto">
			<h1 class="my-4">Vue flux</h1>

			<div class="sm:block md:block lg:flex xl:flex -mx-2">
				<div class="lg:w-3/5 px-2 mb-4">
					<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" :captions="fluxCaptions" ref="slider">
						<flux-controls slot="controls" :slider="$refs.slider"></flux-controls>
						<flux-index slot="index" :slider="$refs.slider"></flux-index>
						<flux-pagination slot="pagination" :slider="$refs.slider"></flux-pagination>
					</vue-flux>
				</div>

				<!-- <div class="lg:w-2/5 px-2 mb-4 transitions">
					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a :class="transitionClass('transitionFade')" @click="showNext('transitionFade')">Fade</a>
						</li>

						<li class="flex-1 mr-2">
							<a :class="transitionClass('transitionKenburn')" @click="showNext('transitionKenburn')">Kenburn</a>
						</li>

						<li class="flex-1">
							<a :class="transitionClass('transitionSwipe')" @click="showNext('transitionSwipe')">Swipe</a>
						</li>
					</ul>

					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a :class="transitionClass('transitionSlide2d')" @click="showNext('transitionSlide2d')">Slide 2D</a>
						</li>

						<li class="flex-1">
							<a :class="transitionClass('transitionSlide3d')" @click="showNext('transitionSlide3d')">Slide 3D</a>
						</li>
					</ul>

					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBars2d')" :class="transitionClass('transitionBars2d')">Bars 2D</a>
						</li>

						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBars3d')" :class="transitionClass('transitionBars3d')">Bars 3D</a>
						</li>

						<li class="flex-1">
							<a @click="showNext('transitionZip')" :class="transitionClass('transitionZip')">Zip</a>
						</li>
					</ul>

					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBlinds2d')" :class="transitionClass('transitionBlinds2d')">Blinds 2D</a>
						</li>

						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBlinds3d')" :class="transitionClass('transitionBlinds3d')">Blinds 3D</a>
						</li>

						<li class="flex-1">
							<a @click="showNext('transitionTurn3d')" :class="transitionClass('transitionTurn3d')">Turn 3D</a>
						</li>
					</ul>

					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBlocks2d1')" :class="transitionClass('transitionBlocks2d1')">Blocks 2D 1</a>
						</li>

						<li class="flex-1 mr-2">
							<a @click="showNext('transitionBlocks2d2')" :class="transitionClass('transitionBlocks2d2')">Blocks 2D 2</a>
						</li>

						<li class="flex-1">
							<a @click="showNext('transitionBlocks3d')" :class="transitionClass('transitionBlocks3d')">Blocks 3D</a>
						</li>
					</ul>

					<ul class="list-reset flex mb-2">
						<li class="flex-1 mr-2">
							<a @click="showNext('transitionConcentric')" :class="transitionClass('transitionConcentric')">Concentric</a>
						</li>

						<li class="flex-1 mr-2">
							<a @click="showNext('transitionWarp')" :class="transitionClass('transitionWarp')">Warp</a>
						</li>

						<li class="flex-1">
							<a @click="showNext('transitionCamera')" :class="transitionClass('transitionCamera')">Camera</a>
						</li>
					</ul>
				</div> -->
			</div>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis enim, scelerisque vitae tellus quis, vulputate pulvinar lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lobortis enim. Donec pellentesque enim at vulputate tempus. Suspendisse ultricies elementum sem id porta. Suspendisse arcu nisi, luctus et malesuada at, dignissim et tortor. Sed ullamcorper sapien lacinia eros commodo, ut vestibulum metus gravida. Morbi at est sollicitudin, viverra mauris et, tincidunt felis. Morbi et ornare lorem. Praesent vel consequat enim. Nunc urna ante, consequat eget egestas et, mollis et lacus. Donec sed fringilla nunc, ut vestibulum metus. Vivamus suscipit efficitur efficitur. Nunc id feugiat ante, non faucibus arcu.</p>


			<flux-parallax src="http://pelmorexpd-a.akamaihd.net/img/1942203455001/201808/1942203455001_5825399984001_5825399632001-vs.jpg?pubId=1942203455001&videoId=5825399632001" type="relative" class="parallax">
				<div>CONTENT</div>
			</flux-parallax>

			</div>
	</div>
</template>

<script>
	import VueFlux from './VueFlux.vue';
	import FluxControls from './FluxControls.vue';
	import FluxIndex from './FluxIndex.vue';
	import FluxPagination from './FluxPagination.vue';
	import FluxParallax from './FluxParallax.vue';
	import Transitions from './transitions/index.js';


  import './vue-flux.css';
	import axios from "axios";
	export default {
		name: 'videoslider',

		components: {
			VueFlux,
			FluxControls,
			FluxIndex,
			FluxPagination,
			FluxParallax
		},

		data: () => ({
			baseTransitionClass: 'text-center whitespace-no-wrap block border border-grey-light rounded text-white cursor-pointer py-2 px-4 shadow-md',
			activeTransitionClass: 'bg-black',
			inactiveTransitionClass: 'bg-grey-darkest hover:bg-black',
			fluxOptions: {
				autoplay: false
			},
			fluxImages: [
				'./1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        './1.jpg',
        //'https://pelmorexpd-a.akamaihd.net/img/1942203455001/201808/1942203455001_5828029706001_5828029974001-vs.jpg'
			],
			fluxTransitions: Transitions,
			fluxCaptions: [],
			rendered: false
		}),

		computed: {
			slider: function() {
				return this.$refs.slider;
			},

			currentTransition: function() {
				if (!this.rendered)
					return undefined;

				return this.$refs.slider.transition.current;
			}
		},
	mounted() {
		this.getVideodata();
		this.rendered = true;

		},

		methods: {
			getVideodata(){
				axios({ method: "GET", "url": "https://www.theweathernetwork.com/ca/api/videodata/getplaylistbyid?playlistID=2312993038001&noofvideosPerPlaylist=20&playlistStartsAt=0&sponsored=0&total=12&placecode=canu0029" }).then(result => {
          this.videodataArray= result.data;
          //this.fluxImages.length=12;
          //console.log(this.videodataArray.videos);
          var i=0;
          console.log('flux 1',this.fluxImages);
					for (var video in result.data.videos) {
					// if (result.data.hasOwnProperty(video) ) {
            result.data.videos[video].poster=result.data.videos[video].poster.replace("http","https");
          //	this.fluxImages.push(result.data.videos[video].poster);
            this.fluxImages[i]=result.data.videos[video].poster;
						this.fluxCaptions.push(result.data.videos[video].title);
						//console.log(result.data.videos[video].poster);
            i++;
					// }
					}
					this.fluxImages=Object.values(this.fluxImages); //get rid of the keys, keep comma separated values
					this.fluxCaptions=Object.values(this.fluxCaptions);

					console.log('flux 2',this.fluxImages);

				}, error => {
					console.error(error);
				});
			},
			showNext(transition) {
				this.$refs.slider.showImage('next', transition);
			},

			transitionClass(transition) {
				let tClass = this.baseTransitionClass;

				if (this.currentTransition === transition)
					tClass += ' '+ this.activeTransitionClass;

				else
					tClass += ' '+ this.inactiveTransitionClass;

				return tClass;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vue-flux {
		box-shadow: 0 0 12px 2px rgba(34,36,38,.85);
	}

	.transitions a {
		font-size: .975rem;
	}

	.parallax {
		font-size: 3rem;
		color: white;
		font-weight: bold;
		justify-content: center;
		align-items: center;
		text-shadow:
			-2px -2px 0 black,
			 2px -2px 0 black,
			-2px  2px 0 black,
			 2px  2px 0 black;
	}

	p {
		margin: 24px 0;
	}
</style>
