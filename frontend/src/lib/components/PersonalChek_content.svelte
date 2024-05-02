<script>
	import { slide } from 'svelte/transition';

	// ---------------------------------------image source--------------------------------
	import icon_v from '../assets/icon-v.svg';
	import icon_listView1 from '../assets/icon-listView1.svg';
	import icon_gridView1 from '../assets/icon-gridView1.svg';
	import icon_galView1 from '../assets/icon-galView1.svg';
	import icon_listView2 from '../assets/icon-listView2.svg';
	import icon_gridView2 from '../assets/icon-gridView2.svg';
	import icon_galView2 from '../assets/icon-galView2.svg';

	// nav bar select event
	let navClasses = [
		'pC_nav_selected',
		'pC_nav_select',
		'pC_nav_select',
		'pC_nav_select',
		'pC_nav_select'
	];
	let navTxts = ['교양', '자연과학', '인문사회', '이중전공', '융합전공'];
	async function selectNav(index) {
		// 이미 선택된 상태인 경우 아무 작업도 하지 않음
		if (navClasses[index] === 'pC_nav_selected') return;
		// 모든 버튼의 클래스를 'pC_nav_select'으로 초기화
		navClasses = navClasses.map((cls, i) => (i === index ? 'pC_nav_selected' : 'pC_nav_select'));
	}
	// view bar select event
	let viewClasses = ['pC_view_selected', 'pC_view_select', 'pC_view_select'];
	let icon_views1 = [icon_listView1, icon_gridView2, icon_galView2];
	let icon_views2 = [icon_listView2, icon_gridView1, icon_galView2];
	let icon_views3 = [icon_listView2, icon_gridView2, icon_galView1];
	let icon_views = [icon_views1, icon_views2, icon_views3];
	let img_index = 0;
	async function selectView(index) {
		// 이미 선택된 상태인 경우 아무 작업도 하지 않음
		if (viewClasses[index] === 'pC_view_selected') return;
		// 모든 버튼의 클래스를 'pC_view_select'으로 초기화
		viewClasses = viewClasses.map((cls, i) =>
			i === index ? 'pC_view_selected' : 'pC_view_select'
		);
		img_index = index;
	}

	// onclick event svelte 활용

	let open = [false, false, false];
	async function openModel(index) {
		open[index] = true;
	}
	async function closeModel(index) {
		open[index] = false;
	}
	async function clickOutside(node) {
		function handleClick(event) {
			const targetEl = event.target;
			if (node && !node.contains(targetEl)) {
				const clickOutsideEvent = new CustomEvent('outside');
				node.dispatchEvent(clickOutsideEvent);
			}
		}
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	// 원본 배열에서 원하는 값을 제거하는 함수
	const arrayRemove = (arr, value) => {
		return arr.filter((ele) => {
			return ele != value;
		});
	};

	// -----------sort1------------//
	let sortCorrect1 = [1, 2, 3, 4];
	let sortTxt1 = [
		{ id: 1, values: 'sales', titles: '인기순' },
		{ id: 2, values: 'lowPrice', titles: '낮은가격순' },
		{ id: 3, values: 'highPrice', titles: '높은가격순' },
		{ id: 4, values: 'reviews', titles: '리뷰순' }
	];
	let sortSelect1 = sortTxt1.find((item) => item.id === 1);

	// -----------sort2------------//
	let sortCorrect2 = [1, 2, 3, 4, 5, 6, 7];
	let sortTxt2 = [
		{ id: 1, values: 'allLevel', titles: '전체등급' },
		{ id: 2, values: 'A+', titles: 'A+ 이상' },
		{ id: 3, values: 'A', titles: 'A\u00A0\u00A0 이상' },
		{ id: 4, values: 'B+', titles: 'B+ 이상' },
		{ id: 5, values: 'B', titles: 'B\u00A0\u00A0 이상' },
		{ id: 6, values: 'C+', titles: 'C+ 이상' },
		{ id: 7, values: 'C', titles: 'C\u00A0\u00A0 이상' }
	];
	let sortSelect2 = sortTxt2.find((item) => item.id === 1);

	// -----------sort3------------//
	let sortCorrect3 = [1, 2, 3, 4];
	let sortTxt3 = [
		{ id: 1, values: '15Views', titles: '15개씩 보기' },
		{ id: 2, values: '30Views', titles: '30개씩 보기' },
		{ id: 3, values: '50Views', titles: '50개씩 보기' },
		{ id: 4, values: '90Views', titles: '90개씩 보기' }
	];
	let sortSelect3 = sortTxt3.find((item) => item.id === 1);

	//-------------sort array-----------//
	let sortSelect = [sortSelect1, sortSelect2, sortSelect3];
	let sortCorrect = [sortCorrect1, sortCorrect2, sortCorrect3];
	let sortTxt = [sortTxt1, sortTxt2, sortTxt3];

	async function selectSort(cls, index) {
		let itemId = sortCorrect[cls][index];
		sortSelect[cls] = sortTxt[cls].find((item) => item.id === itemId);
		let sortCorrected = arrayRemove(sortCorrect[cls], sortCorrect[cls][index]);
		sortCorrected.sort();
		sortCorrected.unshift(sortCorrect[cls][index]);
		sortCorrect[cls] = sortCorrected;
		return sortCorrect[cls];
	}
</script>

<div class="personalChek_content">
	<div class="pC_content_section">
		<div class="pC_box_title">
			<span class="pC_title_txt">맞춤형 CHEK</span>
			<p class="pC_subtitle_txt">사용자의 대학 및 학과에 관련된 도서를 추천해주는 화면입니다.</p>
		</div>
		<div class="pC_nav_bar">
			<div class="pC_nav_lists">
				{#each [0, 1, 2, 3, 4] as idx}
					<button on:click={() => selectNav(idx)} class={navClasses[idx]}>{navTxts[idx]}</button>
				{/each}
			</div>
		</div>
		<div class="pC_sort_section">
			<div class="pC_sort_bar">
				<div class="pC_sort_lists">
					<button on:click={() => openModel(0)} class="pC_sort_button">
						{sortSelect[0]['titles']}
						<img src={icon_v} alt="icon_v" />
						{#if open[0]}
							<div
								on:outside={() => closeModel(0)}
								use:clickOutside
								transition:slide
								style="height: 105px;"
								class="pC_sort_sub"
							>
								{#each [1, 2, 3] as idx}
									<button on:click={() => selectSort(0, idx)}>
										{sortTxt[0].find((item) => item.id === sortCorrect[0][idx])['titles']}
									</button>
								{/each}
							</div>
						{/if}
					</button>
				</div>
				<div class="pC_sort_lists">
					<button on:click={() => openModel(1)} class="pC_sort_button">
						{sortSelect[1]['titles']}
						<img src={icon_v} alt="icon_v" />
						{#if open[1]}
							<div
								on:outside={() => closeModel(1)}
								use:clickOutside
								style="height: 210px;"
								transition:slide
								class="pC_sort_sub"
							>
								{#each [1, 2, 3, 4, 5, 6] as idx}
									<button
										style="justify-content:center; padding-left: 0px;"
										on:click={() => selectSort(1, idx)}
									>
										{sortTxt[1].find((item) => item.id === sortCorrect[1][idx])['titles']}
									</button>
								{/each}
							</div>
						{/if}
					</button>
				</div>
				<div class="pC_sort_lists">
					<button on:click={() => openModel(2)} class="pC_sort_button">
						{sortSelect[2]['titles']}
						<img src={icon_v} alt="icon_v" />
						{#if open[2]}
							<div
								on:outside={() => closeModel(2)}
								use:clickOutside
								transition:slide
								style="height: 105px;"
								class="pC_sort_sub"
							>
								{#each [1, 2, 3] as idx}
									<button on:click={() => selectSort(2, idx)}>
										{sortTxt[2].find((item) => item.id === sortCorrect[2][idx])['titles']}
									</button>
								{/each}
							</div>
						{/if}
					</button>
				</div>
				<div class="pC_view_lists">
					{#each [0, 1, 2] as idx}
						<button on:click={() => selectView(idx)} class={viewClasses[idx]}>
							<img src={icon_views[img_index][idx]} alt="icon" />
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div class="pC_page_bar"></div>
		<div class="pC_book_section">
			<div class="pC_box_book">
				<div class="pC_book_info">
					<div class="pC_book_img">
						<button class="pC_book_level"> A+</button>
						<button class="pC_check_chek"> </button>
					</div>
					<div class="pC_info_txt">
						<!-- HACK: back end 연결전 하드코딩 -->
						<span class="pC_info_title">별들이 겹치는 순간</span>
						<span class="pC_info_author">저자 이수진 | 출판사 솰라솰라 | ISBN : 20021212</span>
						<div>
							<span class="pC_info_discount">70%</span><span class="pC_info_price2"
								>&nbsp;10,500원&nbsp;</span
							><span class="pC_info_price1">15,000원</span>
						</div>

						<span class="pC_info_sub"
							>별 하나의 추억과 별 하나의 사랑과 별 하나의 쓸쓸함 별 하나의 동경 별 하나의 시련 별
							하나의 어머니</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../css/personalChek_content.css';
</style>
