# The PETOPIA
프로젝트 기간 : 06/17 ~ 06/24
## 💡 프로젝트 소개
### 1. 프로젝트 개요
최근 반려동물 보유 가구 수가 증가하면서 관련한 시장 규모가 크게 확대되고 있습니다. 반려동물을
가족처럼 여기는 사람들을 뜻하는 신조어 '펫펨족'(Pet + Family)도 생겨나고 있습니다. 오프라인
유통업계는 반려동물과 함께하는 고객을 위해 펫 전용 공간과 '개모차' 대여 서비스 등 다양한 펫
프렌들리 서비스를 제공하고 있지만, 이들 서비스에 대한 정보 부족으로 활용에 어려움을 겪고
있습니다. 이에 이상적인 반려동물 공간, '펫+유토피아' 합성어인 <b>'더 페토피아 (The Petopia)'</b>를
기획하여 백화점에서 반려견과 함께하는 최적의 환경을 제공하고자 합니다
### 2. 프로젝트 목표
- 쇼핑 경험 향상
  - 백화점 내에서 반려견과 함께 즐길 수 있도록 편의 서비스 위치 정보를 제공하여 고객들의 쇼핑 경험을 향상시키고, 더욱 편리한 백화점 이용 환경을 조성한다.
- 반려견 관련 서비스 확대
  - 개모차 예약 서비스를 제공함으로써 백화점 내 펫 편의성을 높인다. 이를 통해 펫 소유자들에게 백화점을 더 많이 이용하고자 하는 동기를 부여한다.

## 🔧 기술 스택
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## ❗  메인기능 소개
### 1. 지도
#### 반려견 편의시설 지도를 제공하는 기능
![지도1](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/1ed9b36c-c103-4fb0-bdcd-d9c1a1972473)

#### 반려견 편의시설 지도 마커 표시하는 기능
![지도2](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/9da0a71a-aa24-43eb-96b7-8160555e4be0)
![지도3](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/8d080b06-4340-4483-891d-57fac9ae3f62)

#### 반려견 편의시설 위치 정보 제공하는 기능
![지도5](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/45ddb385-e100-4f46-b49e-eea26eabb8bb)


### 2. 예약
#### 개모차 대여 예약 서비스 기능
![예약1](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/25e8265d-1457-4ac3-a399-68afa36b2003)

![예약2](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/90d2428f-8f4e-4b47-9f93-1e7f524a9ac9)

![예약3](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/17084458-0b2e-44bd-8e7e-6130923c9e45)

![예약4](https://github.com/Zui-Topia/Pet-Topia-React/assets/89077219/7ce3719e-021d-4cb9-a25a-71850c3be7d8)

## 📌 커밋 컨벤션
### 1. 커밋 유형 지정
- 커밋 유형은 영어 소문자로 작성하기
    
    
    | 커밋 유형 | 의미 |
    | --- | --- |
    | feat | 새로운 기능 추가 |
    | build | 빌드 관련 파일 수정에 대한 커밋 
    ex) application.properties  |
    | fix | 버그 수정 |
    | docs | 문서 수정 |
    | style | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
    | refactor | 코드 리팩토링 |
    | test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
    | design | CSS 등 사용자 UI 디자인 변경 |
    | comment | 필요한 주석 추가 및 변경 |
    | rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
    | remove | 파일을 삭제하는 작업만 수행한 경우 |

### 2. 제목과 본문을 빈행으로 분리

- 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것
- 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

### 3. 커밋 유형을 적고 한 칸 띄고 콜론 적고 한 칸 띈 후 제목 작성하기

```bash
git commit -m "feat : 제목
- 체크 -> 
- "

"feat : 타이틀 - 컴포넌트"
```

### 4. 끝에는 `.` 금지

### 5. 제목은 영문 기준 50자 이내로 할 것

### 6. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

### 7. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

```
- 변경 내용 1
- 변경 내용 2
- 변경 내용 3
```

</aside>


