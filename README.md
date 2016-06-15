# Flux TodoMVC 예제
Facebook의 Flux TodoMVC 예제의 Fork 버전입니다.
https://github.com/facebook/flux/tree/master/examples/flux-todomvc/

# Facebook 예제와 다른 점

1. 모듈화 도구
    - Facebook : browserify
    - 이 예제 : Webpack
2. React.js 버전 차이
    - Facebook : 0.12.0
    - 이 예제 : 15.1.0
3. 소스상의 차이
    - React.js 버전 업그레이드에 대응하여 Real DOM에 마운트시켜주는 React.render() 대신 ReactDom.render()를 사용하도록 수정하였습니다.
    - 그 외에는 모두 동일합니다.

# 설치
```
git clone https://github.com/jongbumi/flux-todomvc.git
cd flux-todomvc
npm install
```

# 실행
```
npm start
```
위 명령어 실행 후 브라우저로 http://localhost:8080 접속합니다

# 빌드
```
npm run build
```
위 명령어를 실행하면 bin/app.bundle.js 파일이 생성됩니다.
그 다음 index.html 파일을 브라우저로 직접 열어봅니다.
