<script>
	import { page, access_token, username, is_login } from './store';
</script>

<div class="header">
	<div class="header_top">
		<div class="top_section">
			<ul class="top_list">
				<span class="top_subitem">
					{#if $is_login}
						<a
							href="/login"
							on:click={() => {
								$access_token = '';
								$username = '';
								$is_login = false;
							}}
							>로그아웃
						</a>
					{:else if $is_login==false }
						<a href="/login"> 로그인 </a>
					{/if}
				</span>
				<span class="top-subitem">
					<a href="/signup"> 회원가입 </a>
				</span>
				<span class="top-subitem">
					<a href="/mypage"> 마이페이지 </a>
				</span>
				<span class="top-subitem">
					<a href="/jangbaguni"> 장바구니 </a>
				</span>
				<span style="margin-right: 0px;" class="top-subitem">
					<a href="/support"> 문의하기 </a>
				</span>
			</ul>
		</div>
	</div>
	<div class="header_main">
		<div class="main_section">
			<div class="main_both">
				<span class="chek_hd_logo">
					<a href="/">CHEK</a>
				</span>
				<div class="center">
					<div class="box_search">
						<a href="/search" class="totalsearch">
							<span class="totalsearch_txt">통합검색</span>
							<img src="/icon-totalsearch.svg" alt="icon-totalsearch" />
						</a>
						<input placeholder="검색어를 입력하세요" class="input_search" />
						<span class="search_icon">
							<a href="/"> <img src="/icon-search.svg" alt="icon-search" /></a>
						</span>
					</div>
					<div class="line_search"></div>
				</div>
				<div class="right">
					<span class="mypage_icon">
						<a href="/mypage">
							<img src="/icon-mypage.svg" alt="icon-mypage" />
						</a>
					</span>
					<span class="checkchek_icon"
						><a href="/checkchek"> <img src="/icon-checkchek.svg" alt="icon-checkchek" /></a>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="header_nav">
		<nav class="box_nav">
			<ul class="nav_lists">
				<li class="nav_item_icon">
					<a href="/category">
						<img src="/icon-category.svg" alt="icon-category" />
					</a>
				</li>
				<li class="nav_items" style="padding-left: 10px; padding-right:25px;">
					<a href="/category">CATEGORY</a>
				</li>
				<div class="nav_line"></div>
				<li class="nav_items"><a href="/home">HOME</a></li>
				<li class="nav_items"><a href="/chekbook">CHEKBOOK</a></li>
				<li class="nav_items"><a href="/univsell">UNIVSELL</a></li>
				<li class="nav_items"><a href="/locker">LOCKER</a></li>
			</ul>
		</nav>
	</div>
</div>

<style>
	@import '../css/header.css';
</style>
