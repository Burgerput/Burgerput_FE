# Burgerput Front-End Repo

![burgerput-main.png](https://github.com/user-attachments/assets/9a356685-7f3d-4f03-926e-569866256509)

### 배포 URL : https://burgerput.co.kr

<br>

## 프로젝트 소개

Burgerput은 사무 자동화 시스템으로 버거킹 Zenput 시스템을 보다 안전하고 간편하게 이용할 수 있도록 개발된 프로젝트입니다.

### 프로젝트를 시작하게 된 배경

기존 Zenput 페이지의 경우 최대 온도 범위가 제공되지 않아 불가능한 범위가 입력될 수 있어요.  
하지만 이를 검증해주지 않아 오기입이 발생하고 있고, 이 때문에 REV라는 중요한 심사에서 감점을 당하고 있어요.  
우리가 직접 웹 어플리케이션을 개발해 이러한 문제점을 해결하고 싶어 이 프로젝트를 시작하게 됐어요.  

### 프로젝트 주요 기능

- 사용자에게 최소, 최대 온도를 제공해 입력 값의 가이드를 제공합니다.  
- 입력된 값을 각 제품의 최소, 최대 온도로 검증해 오기입을 방지합니다.  
- 사용하는 제품만을 선택해 입력의 효율을 높여줍니다.  

<br>

## 1. 개발 환경

### 사용 기술
![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![reactquery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![zustand](https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white)
![react-hook-form](https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![socket.io](https://img.shields.io/badge/Web%20Socket-010101?style=flat-square&logo=socketdotio&logoColor=white)

### 버전 관리
![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github)

### 인프라
![githubactions](https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![amazonaws](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws)
![amazons3](https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![amazonroute53](https://img.shields.io/badge/amazonroute53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white)

<br>

## 2. 채택한 기술
    
### Zustand

- **프로젝트의 문제 해결**: Zustand는 기존에 발생한 props drilling과 상태 관리의 복잡성을 해결하는 데 도움이 되었습니다. 특히 여러 컴포넌트에서 제품과 UI 상태를 관리할 때, 상태를 중앙 집중식으로 관리함으로써 코드 유지보수성과 가독성이 크게 향상되었습니다.

- **낮은 학습 비용**: Zustand는 React의 useState와 유사하게 set 함수를 사용하여 상태를 관리할 수 있어, 별도의 학습 비용이 적습니다. 기존에 React 상태 관리에 익숙한 개발자라면 쉽게 적용할 수 있다는 점에서 Redux나 Recoil보다 도입하기 쉬운 선택이었습니다.

- **경량 라이브러리**: Redux나 Recoil과 달리, Zustand는 상대적으로 가벼운 상태 관리 라이브러리로 성능에 미치는 영향이 적습니다. 프로젝트에서 상태 관리를 필요로 하는 부분이 많았지만, 성능 저하 없이 적절한 해결책을 제공했습니다.

- **명확한 상태 관리**: Zustand는 상태와 액션을 store에서 명확하게 관리할 수 있어, 각각의 상태 변화와 그에 따른 로직을 쉽게 추적할 수 있습니다. 특히 여러 UI 상태와 제품 관련 로직을 통합 관리하는 데 유용했습니다.

### React-Hook-Form

- **리렌더링 최적화**: react-hook-form은 비제어 컴포넌트의 특성을 활용하여 불필요한 리렌더링을 줄여 성능을 최적화합니다. 최소 20개 이상의 필드를 가진 현재 프로젝트에서 유리한 라이브러리라고 생각했습니다.

- **직관적인 코드 구조**: useFieldArray, defaultValues, setValue와 같은 기능을 제공하여 입력 필드의 값을 관리하고 동기화하는 과정이 매우 직관적입니다. 이를 통해 useEffect를 사용해 직접 객체를 수정할 필요가 없어졌고, 더 간결한 코드를 작성할 수 있었습니다.

- **검증 로직 통합**: react-hook-form의 register 메서드를 통해 각 필드에 대한 입력값 검증을 손쉽게 설정할 수 있어 별도의 검증 로직을 작성할 필요 없이 필드에 바로 적용할 수 있었습니다. mode 설정에 따라 입력값 검증이 진행되는 시점도 유연하게 조절할 수 있었습니다.

- **유연한 상태 관리**: react-hook-form은 다양한 형태의 입력 필드를 손쉽게 관리할 수 있고, 필드의 값과 상태를 동기화하기 쉬워 다양한 컴포넌트와의 연동에 유연합니다. 예를 들어, rc-slider와 같은 외부 라이브러리와의 동기화도 원활히 처리할 수 있었습니다.


### Socket.io

- **실시간 양방향 통신 지원**: Socket.io는 실시간으로 양방향 통신을 지원하기 때문에, 사용자가 관리자와 실시간으로 소통할 수 있는 기능을 손쉽게 구현할 수 있었습니다.

- **간편한 채팅 기능 구현**: Socket.io는 이벤트 기반 아키텍처로 .on()과 .emit() 같은 메서드를 통해 손쉽게 이벤트를 등록하고 데이터를 주고받을 수 있어, 실시간 메시지 전송 및 수신을 구현하는 데 매우 유리했습니다.

- **크로스 플랫폼 지원**: Socket.io는 다양한 플랫폼에서 지원되기 때문에, 관리자 페이지를 모바일로 주로 접속하는 데 있어 유리했습니다. 이를 통해 데스크탑과 모바일 모두에서 일관된 채팅 기능을 제공할 수 있어, 관리자와 사용자 모두에게 편리한 채팅 환경을 구축할 수 있었습니다.

<br>

## 3. 프로젝트 구조
**FSD 방법론을 적용했습니다**
```
├─public                                    
│  ├─data                                   
│  └─logo                                   
└─src                                       
    ├─app                                   
    │  ├─providers                          
    │  └─routes                             
    ├─entities                              
    │  ├─custom-products                    
    │  │  ├─input-temp                      
    │  │  │  ├─api                          
    │  │  │  └─model                        
    │  │  └─random-temp                     
    │  │      ├─api                         
    │  │      └─model                       
    │  ├─manager                            
    │  │  ├─api                             
    │  │  ├─consts                          
    │  │  └─model                           
    │  ├─select-products                    
    │  │  ├─api                             
    │  │  └─model                           
    │  ├─socket                             
    │  │  ├─lib                             
    │  │  └─model                           
    │  ├─ui-state                           
    │  │  └─model                           
    │  └─user                               
    │      ├─api                            
    │      └─model                          
    ├─features                              
    │  ├─alert                              
    │  │  ├─error-alert                     
    │  │  └─success-alert                   
    │  ├─dday-counter                       
    │  │  └─ui                              
    │  │      └─DdayCounter                 
    │  ├─generate-random-temp               
    │  │  └─model                           
    │  ├─how-to-use                         
    │  │  └─ui                              
    │  │      └─HowToUse                    
    │  ├─input-temp                         
    │  │  └─ui                              
    │  ├─random-temp                        
    │  │  ├─lib                             
    │  │  │  └─hooks                        
    │  │  └─ui                              
    │  ├─select-manager                     
    │  │  ├─model                           
    │  │  └─ui                              
    │  └─updated-value-check                
    │      ├─model                          
    │      └─ui                             
    │          ├─AddedOrRemovedItem         
    │          ├─EditItem                   
    │          └─UpdatedValueChecker        
    ├─pages                                 
    │  ├─edit-admin-profile                 
    │  ├─edit-managers                      
    │  ├─input-temp                         
    │  │  ├─food                            
    │  │  └─machine                         
    │  ├─not-found                          
    │  │  └─ui                              
    │  ├─random-temp                        
    │  │  ├─food                            
    │  │  ├─guide                           
    │  │  └─machine                         
    │  ├─select-products                    
    │  │  ├─food                            
    │  │  └─machine                         
    │  └─sign-in                            
    ├─shared                                
    │  ├─api                                
    │  ├─lib                                
    │  │  └─hooks                           
    │  └─ui                                 
    │      ├─Banner                         
    │      │  └─ui                          
    │      ├─Button                         
    │      │  └─ui                          
    │      ├─LoadingSpinner                 
    │      │  ├─BarSpinner                  
    │      │  │  └─ui                       
    │      │  └─PacmanSpinner               
    │      │      └─ui                      
    │      └─Modal                          
    │          └─ui                         
    │              ├─BackDrop               
    │              └─Modal                  
    └─widgets                               
        ├─chat-window                       
        │  ├─chat-logs                      
        │  ├─input-chat-message             
        │  └─ui                             
        ├─custom-product                    
        │  └─ui                             
        ├─edit-admin-form                   
        │  ├─consts                         
        │  └─ui                             
        ├─Footer                            
        │  └─ui                             
        ├─input-temp-form                   
        │  └─ui                             
        ├─input-user-name                   
        │  └─ui                             
        ├─Navbar                            
        │  ├─consts                         
        │  └─ui                             
        │      ├─DropDownContact            
        │      ├─DropDownMenu               
        │      └─Navbar                     
        ├─random-temp-form                  
        │  └─ui                             
        └─sign-in-form                      
            ├─api                           
            └─ui                            
```

<br>

## 4. 페이지별 기능

### [로그인 화면]
| 로그인 화면 |
|----------|
|![login_page](https://github.com/user-attachments/assets/2beb5606-3dd0-43fd-8549-9fb6f143214d)|
- 루트 경로 및 하위 경로에 대한 접근 시 토큰 검사 후 토큰이 없을 경우 보여지는 페이지입니다.
  - 각 경로에 대한 토큰 검사는 react router의 loader 기능을 사용합니다.

<br>

### [메인 화면]
| 메인화면 |
|----------|
|![main_page](https://github.com/user-attachments/assets/bbee2678-e960-46cf-996b-42eb476122ec)|
- 로그인 후 진입하는 메인화면입니다.
- 화면 기준 왼쪽이 navbar 영역이며, 화면 중앙은 typeit 라이브러리를 사용한 사이트명과 로고, 오른쪽이 footer 영역입니다.
  - main 버튼을 제외한 navbar 버튼은 모두 depth2를 포함합니다.
  - footer 영역에 버거풋 도메인 종료일, 툴팁, 관리자에게 문의하기 버튼을 표시합니다.
    
<br>

### [선택 페이지]
| 선택 페이지 |
|----------|
|![select_page](https://github.com/user-attachments/assets/97f286f3-87bc-4a77-9935-1ea2c514f776)|
- 기존 Zenput에서 사용하는 모든 제품 목록을 표시합니다.
- 사용하고 싶은 제품을 클릭하면 선택이 가능합니다.
- 제품을 모두 선택한 뒤 저장 버튼을 클릭하면 선택이 완료되며, 이후 페이지에 다시 진입하면 선택한 제품 목록을 표시합니다.
- 해당 페이지에서 선택한 제품 목록을 온도 입력 페이지에서 사용합니다.

<br>

### [온도 입력 페이지]
| 온도 입력 페이지 |
|----------|
|![input_temp_page](https://github.com/user-attachments/assets/02db4f41-d4ed-4b65-962d-5764973ba144)|
- 선택 페이지에서 선택한 제품 목록을 화면에 표시합니다.
- 온도 입력 폼을 사용해 제품의 온도 값을 입력합니다.
- 최소, 최대 범위 검증과 필수 입력 검증을 수행합니다.

<br>

### [매니저 추가 페이지]
| 매니저 추가 페이지 |
|----------|
|![add_manager_page](https://github.com/user-attachments/assets/278843af-b786-4b2b-a304-c4cd6cc6dbb1)|
- 해당 페이지에서 근무 매니저를 추가할 수 있습니다.
- 추가된 매니저는 이후 온도 입력 페이지에서 사용 가능하며, Zenput 제출 시 근무 매니저 입력 항목에 사용됩니다.

<br>

### [계정 정보 입력 페이지]
| 계정 정보 입력 페이지 |
|----------|
|![input_profile_page](https://github.com/user-attachments/assets/a5d703ca-5b58-4ad5-9afe-6dfc53221276)|
- Zenput 입력 과정에 필요한 계정 정보 입력 페이지입니다.
- 웹 봇을 이용해 로그인 과정을 거치는데 해당 과정에 필요한 계정 정보 입력 페이지입니다.

<br>

### [랜덤 제출 기능 안내 페이지]
| 랜덤 제출 기능 안내 페이지 |
|----------|
|![random_temp_guide_page](https://github.com/user-attachments/assets/0295096b-0103-434b-80e6-1b854a2b20da)|
- 랜덤 제출 기능에 관련된 가이드를 제공하는 페이지입니다.

<br>

### [랜덤 제출 페이지]
| 랜덤 제출 페이지 |
|----------|
|![random_temp_page](https://github.com/user-attachments/assets/d570270d-a9f0-4c13-bf7b-b491d31a4083)|
- 슬라이더를 조작해 온도 범위를 지정할 수 있습니다.
- 지정한 온도 범위를 저장해 지속해서 사용이 가능합니다.
- 오전, 오후 제출 버튼을 클릭해 지정한 온도 범위 내에서 랜덤한 온도 값을 생성해 제출할 수 있습니다.

<br>

### [관리자에게 문의하기]
| 관리자에게 문의하기 |
|----------|
|![chat_to_admin](https://github.com/user-attachments/assets/2eb82b9c-61cb-48a7-9356-ab4561a1e1a0)|
- 관리자에게 문의하기 버튼을 클릭해 채팅이 가능합니다.
- 사용자가 입력한 닉네임을 서버로 전송해 관리자에게 메일을 보냅니다.
- 해당 기능은 웹소켓을 통해 연결하며 관리자가 채팅방에 입장하면 실시간 양방향 통신을 지원합니다.

<br>
