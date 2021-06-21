<template>
  <el-col :span="6">
    <Menu
      default-active="4"
      class="el-menu-vertical-demo"
      background-color="#363556"
      text-color="#fff"
      active-text-color="#fff">
      <MenuItem>
        <router-link class="link_style" to="/">
          <span>HEUM</span>
        </router-link>
      </MenuItem>
      <MenuItem>
        <i class="el-icon-search"></i>
        <span>2020 연말정산</span>
      </MenuItem>
      
      <Submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>대시보드</span>
        </template>
        <MenuItemGroup>
          <MenuItem index="1-1">
            <router-link class="link_style" to="/sub/일간 보고">
              일간 보고
            </router-link>
          </MenuItem>
          <MenuItem index="1-2">
            <router-link class="link_style" to="/sub/월간 보고">
              월간 보고
            </router-link>
          </MenuItem>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="2">
        <template slot="title">
          <i class="el-icon-folder-delete"></i>
          <span>보고서</span>
        </template>
        <MenuItemGroup>
          <MenuItem index="2-1">
            <router-link class="link_style" to="/sub/카드매출분석">
              카드매출분석
            </router-link>
          </MenuItem>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>증명서 및 서식</span>
        </template>
        <MenuItemGroup>
          <MenuItem index="3-1">
            <router-link class="link_style" to="/sub/증명서 발급">
              증명서 발급
            </router-link>
          </MenuItem>
          <MenuItem index="3-2">
            <router-link class="link_style" to="/sub/서식 모음">
              서식 모음
            </router-link>
          </MenuItem>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="4">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span>인사</span>
        </template>
        <MenuItemGroup>
          <MenuItem index="4-1">
            직원관리
          </MenuItem>
          <MenuItem index="4-2">
            <router-link class="link_style" to="/employment/form/add">
              직원등록
            </router-link>
          </MenuItem>
          <MenuItem index="4-3">
            급여관리
          </MenuItem>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>세금</span>
        </template>
      </Submenu>
      <Submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>지원금</span>
        </template>
      </Submenu>
      <Submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>설정</span>
        </template>
        <MenuItemGroup>
          <MenuItem index="7-1">기본 설정</MenuItem>
          <MenuItem index="7-2">사용자 관리</MenuItem>
          <MenuItem index="7-3">금융기관 연동</MenuItem>
        </MenuItemGroup>
      </Submenu>
    </Menu>
  </el-col>
</template>

<script>
import { 
  Menu ,Col, Submenu,
  MenuItemGroup, MenuItem 
} from 'element-ui';

  export default {
    name: 'Sidebar',
    components: {
      Menu ,
      'el-col' : Col ,
      'Submenu' : Submenu,
      MenuItemGroup,
      MenuItem
    }
  }
</script>
<style>
.el-menu-item a { color: #fff ; text-decoration: none; }
</style>
