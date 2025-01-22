#  엘핀 공통 개발도구
#### [**<u>👉 바로가기</u>**](https://d.lfin.kr)

## 🥳 소개합니다
- 엘핀에서 **<u>공통으로 사용하고 있는 개발도구</u>** 들을 한눈에 볼 수 있어요.
- json 데이터를 가지고 js 를 이용해 테이블을 만드는 간단한 방식이에요.
- 기본 html, css, js 로 구성되어있어 쉽게 수정도 가능합니다!

## 🛠 수정 방법을 알려드릴게요.
1.  **data.json** 을 열어주세요.
2. 👆 파일에서 필요한 부분을 수정하고 **main 브랜치**에 푸쉬하면 끝!
3. 푸쉬 후 적용까지는 시간이 걸릴 수도 있습니다.
4. 필요에 따라 언제든 json 구조를 바꿀수도 있어요.
5.  데이터 구조는 아래와 같아요.
```
[
  {
    "name": <string>,          // 테이블 이름 (ex. 개발도구, ASP 도구)
    "tools": [
      {
        "title": <string>,     // 구분 컬럼
        "items": [             // 도구 컬럼
          {
            "name": <string>,  // 도구 명
            "url": [
              {
                "href": <string>, // 실제 URL 링크
                "view": <string>  // URL 을 표시할 텍스트
              }
            ],
            "login": <string>     // 로그인 구분
          }
        ]
      }
    ]
  }
]

```

## 🙋‍♀️ 이렇게 만들어졌어요.
1. **github page 생성**
   <br>- **계정명.github.io** 규칙을 지켜야 페이지가 생성됩니다.
   <br>- 엘핀 깃허브의 경우 계정명은 **l-fin** 입니다.

2. **cloudflare 로 도메인 생성**
   <br>- 현재 도메인: d.lfin.kr

3. **생성한 도메인을 github page 의 custom domain 으로 등록**
   <br>- 도메인 등록 성공 시 <u>DNS check successful</u> 이 표시됩니다.

4. **cloudflare 에서 CNAME 으로 타겟 지정**
   <br>- 엘핀의 경우 <u>l-fin.github.io</u>

5. **https 인증서 문제가 생겼을 경우 CDN(구름모양) ON**

---
### [참고] github page ↔︎ cloudflare 사용 시 타겟
#### * CNAME 으로 타겟을 지정하는 경우
```
이름: www
대상(Target): example.github.io (엘핀의 경우 l-fin.github.io)
Proxy 상태: DNS Only 또는 Proxied
```

#### * A 레코드로 타겟을 지정하는 경우
GitHub Pages는 루트 도메인을 지원하기 위해 고정된 IP 주소를 제공합니다.<br>
이 경우 A 레코드를 설정하고 다음 IP 중 하나를 사용할 수 있습니다.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
```
이름: @
대상(Target): 185.199.108.153 (또는 나머지 IP 중 하나)
TTL: 자동
Proxy 상태: DNS Only 또는 Proxied
```
