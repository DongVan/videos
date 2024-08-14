<script setup lang="ts">

</script>

<template>
	<div class="mobile-nav-toggle active" id="dropdown-mobile-nav" data-dropdown-toggle="mobile-dropdown">
		<span></span>
	</div>
</template>

<style scoped>

.mobile-nav-toggle {
	position: absolute;
	width: 24px;
	height: 24px;
	top: 50%;
	transform: translateY(-33%);
	left: 24px;
	cursor: pointer;
}

.mobile-nav-toggle:hover {
	opacity: 0.8;
}

.mobile-nav-toggle.active {
	transform: translateY(-22%);
}

.mobile-nav-toggle:before,
.mobile-nav-toggle:after, .mobile-nav-toggle span {
	background: #231f20;
	content: "";
	display: block;
	height: 2px;
	transition: all .5s ease;
	width: 100%;
}

.mobile-nav-toggle span {
	display: block;
	margin: 6px 0;
	width: 17px;
}

.mobile-nav-toggle.active:before {
	border: none;
	transform: rotate(45deg) translate3d(0, 0, 0);
}

.mobile-nav-toggle.active:before,
.mobile-nav-toggle.active:after {
	background: #231f20;
	left: 0;
	position: absolute;
	top: 5px;
}

.mobile-nav-toggle.active span {
	display: none;
}

.mobile-nav-toggle.active:before {
	border: none;
	transform: rotate(45deg) translate3d(0, 0, 0);
}

.mobile-nav-toggle.active:after {
	transform: rotate(-45deg) translate3d(0, 0, 0);
}

#dropdown-menu {
	display: none;
	z-index: 999;
	border-radius: 0;
	background: rgba(242, 236, 231, .92);
	padding: 0;
	position: absolute;
	width: 100%;
	max-width: none;
	left: 0;
	height: 160px;
}

#dropdown-menu.active {
	display: flex;
}

#dropdown-menu div > a {
	display: inline-block;
	height: 56px;
	background: #e1d7cf;
	font-size: 13px;
	font-weight: 400;
	line-height: 56px;
	padding: 0 36px;
	margin: 0 4px;
}

#dropdown-menu div > a:hover {
	opacity: 0.8;
}

.mobile-dropdown-toggle {
	z-index: 40;
	background: #E3DED2;
	width: calc(100% - 64px);
	margin: 0 32px !important;
	border-bottom: 1px solid #fff;
}

.mobile-dropdown-toggle ul {
	padding-top: 0;
	padding-bottom: 0;
}

.mobile-dropdown-toggle ul li {
	border-bottom: 1px solid #fff;
	text-align: center;
}

.mobile-dropdown-toggle ul li:last-child {
	border-bottom: 0 !important;
}

.mobile-dropdown-toggle ul li > a {
	display: block;
	color: #231f20;
	font-weight: 700;
	letter-spacing: 3px;
	text-transform: uppercase;
	padding: 20px 0;
}

.mobile-dropdown-toggle ul li.button-icon {
	padding: 40px 0;
}

.mobile-dropdown-toggle ul li.button-icon div:nth-child(1) a {
	margin: 0 8px;
}

.mobile-dropdown-toggle ul li.button-icon a {
	display: inline-block;
	font-size: 16px;
}

.mobile-dropdown-toggle ul li #accordion-collapse button {
	color: #231f20;
	background: unset !important;
	font-weight: 700;
	letter-spacing: 3px;
}

.mobile-dropdown-toggle ul li #accordion-collapse button[aria-expanded="true"] .fa-plus {
	display: none !important;
}

.mobile-dropdown-toggle ul li #accordion-collapse button[aria-expanded="true"] .fa-minus {
	display: block !important;
}

.mobile-dropdown-toggle ul li #accordion-collapse ul {
	border-top: 1px solid #fff;
}

.mobile-dropdown-toggle ul li #accordion-collapse ul li {
	border-bottom: 1px solid #fff;
}

.mobile-dropdown-toggle ul li #accordion-collapse ul li a {
	background: var(--main-background-color);
	font-weight: 500;
}

.mobile-dropdown-toggle ul li.button-icon > div:nth-child(1) {
	margin-bottom: 16px;
}

.mobile-dropdown-toggle ul li.button-icon a.active {
	text-decoration: underline;
}

.mobile-dropdown-toggle ul li.button-icon a span {
	display: block;
	border: 1px solid #000;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	text-align: center;
	line-height: 28px;
	font-size: 16px;
}

.mobile-dropdown-toggle ul li.button-icon a span i {
	color: #000;
	margin-left: 1px;
}


</style>