<script>
	import { onMount } from 'svelte';
	import img_book from '../assets/img_book1.png';
	let count = 1; //HACK: db연결전 하드코딩
	let formattedPrice = '10,500원'; //HACK: db연결전 하드코딩
	// 가격을 형식화하는 함수
	function formatCurrency(amount) {
		return amount.toLocaleString('ko-KR') + '원';
	}
	// 판매가 가격을 숫자로 바꿔주는 함수
	function updatePrice(name) {
		const priceElement = document.querySelector(name);
		let priceText = priceElement.textContent;
		let priceValue = priceText.match(/\d+(,\d+)?/)[0];
		let price = parseInt(priceValue.replace(/,/g, '')); // 쉼표 제거
		return price;
	}
	// btn_count minus함수
	async function minus() {
		let price = await updatePrice('.jB_price_info_txt');
		count = count - 1;
		if (count < 0) {
			count = 0;
		}
		let totalPrice = price * count;
		formattedPrice = formatCurrency(totalPrice);
		if (selectBtn == 'jB_btn_selected') {
			selectPrice = formattedPrice;
			await price_cal();
		}
	}

	// btn_count plus함수
	async function plus() {
		let price = await updatePrice('.jB_price_info_txt');
		count = count + 1;
		let totalPrice = price * count;
		formattedPrice = formatCurrency(totalPrice);
		if (selectBtn == 'jB_btn_selected') {
			selectPrice = formattedPrice;
			await price_cal();
		}
	}
	// btn click 함수
	let selectPrice = '0원';
	let selectImg = '/icon-select.svg';
	let selectBtn = 'jB_btn_selecting';
	async function selectProduct() {
		if (selectBtn != 'jB_btn_selected') {
			selectBtn = 'jB_btn_selected';
			const priceElement = document.querySelector('.jB_price_txt');
			let priceText = priceElement.textContent;
			let priceValue = priceText.replace(/[^\d]/g, '');
			let spPrice = parseInt(priceValue);
			selectPrice = formatCurrency(spPrice);
		} else {
			selectBtn = 'jB_btn_select';
			selectPrice = '0원';
		}
		await price_cal();
	}

	// '>' 기호로 사용하는 변수
	let shape = '>';

	// price_cal 함수
	let package_price = 0;
	let discount_price = 9000;
	let total_price = 0;
	async function price_cal() {
		if (selectBtn == 'jB_btn_selected') {
			let priceValue = selectPrice.replace(/[^\d]/g, '');
			let spPrice = parseInt(priceValue);
			let ttPrice = spPrice + package_price - discount_price;
			total_price = formatCurrency(ttPrice);
		} else {
			total_price = '0원';
		}
	}
	onMount(() => {
		selectProduct();
	});
</script>

<div class="jangbaguni_content">
	<div class="jangbaguni_content_section">
		<div class="jB_main_section">
			<div class="jB_box_title">
				<span class="jangbaguni_title">장바구니</span>
			</div>
			<div class="jB_box_sub_title">
				<div class="jB_sub_txt1">상품 정보</div>
				<div class="jB_sub_txt2">가격 및 수량</div>
				<div class="jB_sub_txt3">수령 방법</div>
			</div>
			<div class="jB_box_book">
				<div class="jB_box_select">
					<button on:click={selectProduct} class={selectBtn}>
						<img src={selectImg} alt="icon-select" />
					</button>
				</div>
				<div class="jB_box_info">
					<img src={img_book} alt="" />
					<div class="jB_box_txt">
						<!-- HACK: back end 연결전 하드코딩 -->
						<h1 class="jB_title_txt">별들이 겹치는 순간</h1>
						<p class="jB_author_info_txt">저자 이수진</p>
						<h2 class="jB_price_info_txt">판매가: 10,500원</h2>
					</div>
				</div>
				<div class="jB_box_price">
					<span class="jB_price_txt">{formattedPrice}</span>
					<div class="jB_btn_count">
						<button on:click={minus} class="jB_minus_count">-</button>
						<span class="jB_count_txt">{count}</span>
						<button on:click={plus} class="jB_plus_count">+</button>
					</div>
				</div>
				<div class="jB_box_input">
					<div class="jB_locker_set">
						<a href="/locker">Locker 이용{shape}</a>
					</div>
					<div class="jB_package_set">
						<a href="/package">배송지 등록{shape}</a>
					</div>
				</div>
			</div>
			<div class="jB_box_book">
				<div class="jB_box_select">
					<button on:click={selectProduct} class={selectBtn}>
						<img src={selectImg} alt="icon-select" />
					</button>
				</div>
				<div class="jB_box_info">
					<img src={img_book} alt="" />
					<div class="jB_box_txt">
						<h1 class="jB_title_txt">별들이 겹치는 순간</h1>
						<p class="jB_author_info_txt">저자 이수진</p>
						<h2 class="jB_price_info_txt">판매가: 10,500원</h2>
					</div>
				</div>
				<div class="jB_box_price">
					<span class="jB_price_txt">{formattedPrice}</span>
					<div class="jB_btn_count">
						<button on:click={minus} class="jB_minus_count">-</button>
						<span class="jB_count_txt">{count}</span>
						<button on:click={plus} class="jB_plus_count">+</button>
					</div>
				</div>
				<div class="jB_box_input">
					<div class="jB_locker_set">
						<a href="/locker">Locker 이용{shape}</a>
					</div>
					<div class="jB_package_set">
						<a href="/package">배송지 등록{shape}</a>
					</div>
				</div>
			</div>
			<div class="jB_box_book">
				<div class="jB_box_select">
					<button on:click={selectProduct} class={selectBtn}>
						<img src={selectImg} alt="icon-select" />
					</button>
				</div>
				<div class="jB_box_info">
					<img src={img_book} alt="" />
					<div class="jB_box_txt">
						<h1 class="jB_title_txt">별들이 겹치는 순간</h1>
						<p class="jB_author_info_txt">저자 이수진</p>
						<h2 class="jB_price_info_txt">판매가: 10,500원</h2>
					</div>
				</div>
				<div class="jB_box_price">
					<span class="jB_price_txt">{formattedPrice}</span>
					<div class="jB_btn_count">
						<button on:click={minus} class="jB_minus_count">-</button>
						<span class="jB_count_txt">{count}</span>
						<button on:click={plus} class="jB_plus_count">+</button>
					</div>
				</div>
				<div class="jB_box_input">
					<div class="jB_locker_set">
						<a href="/locker">Locker 이용{shape}</a>
					</div>
					<div class="jB_package_set">
						<a href="/package">배송지 등록{shape}</a>
					</div>
				</div>
			</div>
			<div class="jB_box_book">
				<div class="jB_box_select">
					<button on:click={selectProduct} class={selectBtn}>
						<img src={selectImg} alt="icon-select" />
					</button>
				</div>
				<div class="jB_box_info">
					<img src={img_book} alt="" />
					<div class="jB_box_txt">
						<h1 class="jB_title_txt">별들이 겹치는 순간</h1>
						<p class="jB_author_info_txt">저자 이수진</p>
						<h2 class="jB_price_info_txt">판매가: 10,500원</h2>
					</div>
				</div>
				<div class="jB_box_price">
					<span class="jB_price_txt">{formattedPrice}</span>
					<div class="jB_btn_count">
						<button on:click={minus} class="jB_minus_count">-</button>
						<span class="jB_count_txt">{count}</span>
						<button on:click={plus} class="jB_plus_count">+</button>
					</div>
				</div>
				<div class="jB_box_input">
					<div class="jB_locker_set">
						<a href="/locker">Locker 이용{shape}</a>
					</div>
					<div class="jB_package_set">
						<a href="/package">배송지 등록{shape}</a>
					</div>
				</div>
			</div>
			
		</div>
		<div class="jB_conv_section">
			<div class="jB_payProcess_bar">
				<div class="jB_box_payProcess">
					<div class="jB_icon_step1" style="background-color:#00bfff;">1</div>
					<span class="jB_step1_txt">장바구니</span>
				</div>
				<div class="jB_box_payProcess">
					<div class="jB_icon_step2">2</div>
					<span class="jB_step2_txt">결제하기</span>
				</div>
				<div class="jB_box_payProcess">
					<div class="jB_icon_step3">3</div>
					<span class="jB_step3_txt">결제완료</span>
				</div>
			</div>
			<div class="jB_conv_bar">
				<span class="jB_info_title">주문정보</span>
				<div class="jB_box_price_cal">
					<div class="jB_box_product_price">
						<span class="jB_product_price">상품가격</span>
						<p class="jB_product_price">+ {selectPrice}</p>
					</div>
					<div class="jB_box_product_price">
						<span class="jB_package_price">배송비</span>
						<p class="jB_package_price">{package_price}원</p>
					</div>
					<div class="jB_box_product_price">
						<span class="jB_discount_price">할인가격</span>
						<p class="jB_discount_price">- {discount_price}원</p>
					</div>
				</div>
				<div class="jB_box_total_price">
					<span class="jB_total_price">결제 금액</span>
					<span class="jB_total_price">{total_price}</span>
				</div>
				<div class="jB_box_order">
					<button class="jB_btn_order">주문하기</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import '../css/jangbaguni_content.css';
</style>
