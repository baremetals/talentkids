import styled from 'styled-components'
import { Field, Form } from "formik";

export const PageContainer = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  position: relative;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .space-bottom {
    margin-bottom: 6.25rem;
    @media (max-width: 991px) {
      margin-bottom: 1.25rem;
    }
  }
`;

export const InnerContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const SiteHeader = styled.header`
  padding-top: 1.625rem;
  padding-bottom: 1.625rem;
  position: relative;
  z-index: 100;
  @media (max-width: 991px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Content = styled.div`
  svg {
    @media (max-width: 991px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const PageHeading = styled.h1``;

export const ToggleBar = styled.button`
  @media (min-width: 992px) {
    display: none;
  }
  width: 1.75rem;
  max-width: 1.75rem;
  padding: 0;
  border: none;
  background-color: transparent;
  display: block;
  cursor: pointer;
  span {
    display: block;
    border-radius: 0.25rem;
    height: 4px;
    background-color: #000;
    margin: 0.25rem 0;
  }
`;

export const NavBarHeader = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: auto;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1;
  img {
    width: 150px;
    @media (max-width: 991px) {
      width: 120px;
    }
  }
`;

export const NavbarCollapse = styled.div`
  @media (max-width: 991px) {
    position: fixed;
    background-color: #fff;
    top: 0;
    bottom: 0;
    width: 20rem;
    right: 0;
    box-shadow: 0 0.25rem 0.625rem rgb(0 0 0 / 8%);
    transition: transform 0.25s ease;
    transform: translateX(100%);
  }
  &.opened {
    @media (max-width: 991px) {
      transform: none;
    }
  }
`;

export const NavBarNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 992px) {
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }
`;

export const NavBarItem = styled.li`
  margin-right: 2rem;
  a {
    display: block;
    @media (max-width: 991px) {
      padding: 0.75rem 1.375rem;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  &.signup {
    a {
      background-color: #bc70ad;
      color: #fff;
      padding: 0.5rem 1.375rem;
      border-radius: 10rem;
      &:hover {
        background-color: #333;
        color: #fff;
      }
      @media (max-width: 991px) {
        border-radius: 0;
        padding: 0.75rem 1.375rem;
      }
    }
    @media (max-width: 991px) {
      margin-top: auto;
      border-bottom: none;
    }
  }
  @media (max-width: 991px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const NavBarItemLink = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  &:hover {
    color: #bc70ad;
  }

  &:after {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    background-color: #bc70ad;
    top: calc(100% + 0.25rem);
    left: 50%;
    margin-left: -4px;
    border-radius: 100%;
    opacity: 0;
  }

  &:not(.signup) {
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }
`;

// Default

export const Heading = styled.div`
  margin-bottom: 3.75rem;
  @media (max-width: 991px) {
    margin-bottom: 2.25rem;
  }
`;

export const SubTitle = styled.span`
  font-size: 1.375rem;
  display: block;
  margin-bottom: 1rem;
  color: #bc70ad;
  @media (max-width: 991px) {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: #74787c;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const ButtonOutLine = styled.button`
  background-color: transparent;
  color: #bc70ad;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 0.875rem 2rem;
  border: 1px solid #bc70ad;
  cursor: pointer;
  line-height: 1;
  font-weight: 400;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  margin-left: 0.5rem;
  &:hover {
    background-color: #bc70ad;
    color: #fff;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const Listings = styled.ul`
  color: #74787c;
  line-height: 1.6;
  list-style: none;
  margin-top: 0;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const ListingsItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  &:before {
    content: '';
    border: 1px dashed #c4c4c4;
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    left: -2.5rem;
    top: 0.125rem;
    border-radius: 100%;
  }
  &:after {
    content: '';
    border-left: 1px solid;
    border-bottom: 1px solid;
    width: 0.625rem;
    height: 0.375rem;
    position: absolute;
    transform: rotate(-45deg);
    left: -2.125rem;
    top: 0.475rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

// Hero Banner

export const Hero = styled.section`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #ffe6e1;
  height: 520px;
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    height: 400px;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
`;

export const HeroSubTitle = styled.span`
  font-size: 1.125rem;
  display: block;
  margin-bottom: 1.25rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 1.875rem;
  @media (max-width: 991px) {
    font-size: 2.875rem;
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }
`;

// Our Services

export const OurService = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const PostCard = styled.div`
  padding: 1.25rem;
  background-color: #fff;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.13);
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const PostCardThumb = styled.div`
  margin-bottom: 1.5rem;
`;

export const PostCardSummary = styled.div`
  padding: 0;
`;

export const PostCardTitle = styled.div`
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 1.25rem;
  }
`;

export const PostCardText = styled.div`
  margin-bottom: 0.625rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  &.row-reverse {
    flex-direction: row-reverse;
  }
  &.g-6 {
    margin: -0.375rem;
    .col {
      padding: 0.375rem;
    }
  }
  &.g-10 {
    margin: -0.375rem;
    .col {
      padding: 0.375rem;
    }
  }
`;

export const Column = styled.div`
  padding: 1rem;
  flex: 1 0 0%;
  &.column-7 {
    min-width: 65%;
  }
  &.column-3 {
    min-width: 33.33%;
    max-width: 33.33%;
    @media (max-width: 991px) {
      min-width: 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 991px) {
    min-width: 100% !important;
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #103741b2;
  color: #fff;
  button {
    border-color: #fff;
    background-color: transparent;
    &:hover {
      border-color: #bc70ad;
      background-color: #bc70ad;
      color: #fff;
    }
  }
`;

export const CardThumb = styled.div`
  height: 438px;
  display: block;
  position: relative;
  &:before {
    content: '';
    background-color: #103741;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 991px) {
    height: 350px;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.75rem;
  @media (max-width: 991px) {
    padding: 1.75rem;
  }
`;

export const CardImage = styled.img`
  width: auto;
`;

export const CardTitle = styled.h3`
  font-size: 1.875rem;
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
`;

// About

export const OurCompany = styled.section`
  background-color: #f9f6ef;
  padding-top: 6rem;
  padding-bottom: 7rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const OurCompanyThumb = styled.div``;

// Classes

export const Classes = styled.div`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const ImageContent = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #f9f6ef;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

// Benefits

export const Benefits = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

// Footer

export const SiteFooter = styled.footer`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  background-color: #232323;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const FooterTitle = styled.h4`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const FooterLinks = styled.div`
  a {
    color: #74787c;
    text-decoration: none;
    display: table;
    line-height: 1;
    margin-bottom: 1.25rem;
    &:hover {
      color: #fff;
    }
  }
`;

export const MediaObject = styled.div``;

export const MediaObjectItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const MediaObjectThumb = styled.div`
  width: 5rem;
  min-width: 5rem;
  height: 5rem;
  margin-right: 1.25rem;
  border-radius: 0.25rem;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const MediaObjectBody = styled.div``;

export const MediaObjectDate = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
  color: #74787c;
  display: block;
  margin-bottom: 0.5rem;
`;

export const MediaObjectTitle = styled.h4`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
`;

// Posts

export const InnerBanner = styled.section`
  background-color: #ffe6e1;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Post = styled.div``;

export const PostThumb = styled.div`
  margin-bottom: 1.125rem;
`;

export const PostBody = styled.div``;

export const PostTitle = styled.h3`
  font-size: 1.625rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

export const Bottom = styled.div`
  display: flex;
`;

export const PostDate = styled.div`
  font-size: 0.75rem;
  color: #74787c;
  svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`;

export const PostMedia = styled.div`
  display: flex;
  margin-left: auto;
  a {
    margin-left: 1rem;
  }
  svg {
    display: block;
  }
`;

export const SearchBar = styled.div`
  background-color: #ffc000;
  padding: 1.875rem;
  border-radius: 0.625rem;
  margin-bottom: 1.875rem;
  position: relative;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #fff;
  border-radius: 0.625rem;
  height: 3.125rem;
  padding: 0.625rem 1.25rem 0.625rem 3rem;
  outline: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 1.875rem;
  top: 1.875rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  width: 3.125rem;
  border: none;
  background-color: transparent;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png);
  padding: 0;
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 991px) {
    top: 1.25rem;
    left: 1.25rem;
  }
`;

export const WidgetPanel = styled.div`
  margin-bottom: 1.875rem;
  border-radius: 0.625rem;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  h4 {
    color: #000000;
  }
`;

export const WidgetPanelTitle = styled.div`
  padding: 0.875rem 1.875rem;
  font-size: 1.375rem;
  font-weight: 600;
  background-color: #1ab9ff;
  color: #fff;
  @media (max-width: 991px) {
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
  }
`;

export const WidgetPanelListing = styled.div`
  padding: 1.875rem;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const WidgetPanelLink = styled.div`
  margin-bottom: 0.5rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const Blockquote = styled.blockquote`
  margin: 2rem 0;
  display: flex;
  &:before {
    content: '“';
    font-size: 14.5rem;
    height: 4rem;
    font-family: sans-serif;
    line-height: 0.8;
    margin-right: 1rem;
    @media (max-width: 991px) {
      font-size: 5rem;
      height: 1.5rem;
    }
  }
  p {
    font-style: italic;
    margin-bottom: 0;
  }
`;

export const BlockquoteName = styled.span`
  display: block;
  margin-top: 1rem;
  font-style: normal;
`;

// Login

export const LoginWrapper = styled.div`
  max-width: 23.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginInner = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 2rem 1.875rem;
  margin-top: 2rem;
`;

export const FormWrap = styled(Form)``;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
  &.submit-button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    button {
      color: #fff;
      border-radius: 0.75rem;
      padding: 1.25rem 2rem;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      box-shadow: 0 0.625rem 2.25rem rgb(111 126 201 / 25%);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  svg {
    margin: auto;
  }
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  border: 1px solid #e4dfdf;
  border-radius: 0.75rem;
  height: 3.5rem;
  padding: 0.75rem 1.25rem 0.75rem 4rem;
  margin: 0;
  &.checkbox {
    display: none;
  }
  &:checked ~ label {
    &:before {
      background-color: #bc70ad;
      border-color: #bc70ad;
    }
  }
`;

export const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const FormLabel = styled.label`
  line-height: 1.2;
  padding-left: 1.75rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #e4dfdf;
    border-radius: 0.25rem;
  }
  &:after {
    content: '';
    position: absolute;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    width: 0.625rem;
    height: 0.375rem;
    transform: rotate(-45deg);
    left: 0.25rem;
    top: 0.25rem;
  }
`;

// Listing

export const ListCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 0.625rem;
  padding: 2.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ListIcon = styled.div`
  display: inline-flex;
  margin-top: -4.625rem;
  margin-bottom: 1.875rem;
  margin-left: auto;
  margin-right: auto;
  width: 4.625rem;
  height: 4.625rem;
  border-radius: 10rem;
  svg {
    display: block;
    margin: auto;
  }
`;

export const ListBody = styled.div``;

// Searice boxes

export const ServiceCard = styled.div``;

export const ServiceIcon = styled.div`
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  svg {
    margin-top: 1.75rem;
    margin-left: 1.25rem;
    margin-right: -1.25rem;
  }
`;

export const Widget = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 1.875rem;
  border-radius: 0.625rem;
  margin-bottom: 1.875rem;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const WidgetTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
`;

export const WidgetBody = styled.div``;

export const DropdownMenu = styled.ul`
  display: none;
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 120px;
  &.opened {
    display: block;
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  svg {
    vertical-align: -3px;
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const FooterContact = styled.div`
  p {
    display: flex;
  }
  svg {
    min-width: 1.25rem;
    margin-top: 0.375rem;
  }
`;

export const Inbox = styled.div``;

export const InboxContent = styled.div`
  background-color: #bc70ad;
  color: #fff;
  max-width: 30rem;
  border-radius: 0.75rem;
  margin: auto;
  padding: 3rem;
  text-align: center;
  svg {
    width: 3rem;
    height: 3rem;
    fill: #fff;
    position: relative;
    margin-bottom: 1rem;
  }
`;

export const InboxTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const InboxDes = styled.div`
  a {
    text-decoration: underline;
  }
`;
