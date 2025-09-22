'use client'

import './proposal.css'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className="proposal-main">
      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 온라인 마케팅 전문 기업</span>
          </div>

          <h1 className="hero-title">
            체계적인 마케팅 설계로
            <br />
            <span className="gradient-text">실제 매출이 증가</span>하는
            <br />
            마케팅을 실행합니다
          </h1>

          <p className="hero-description">
            위즈더플래닝과 함께 시작하세요
          </p>
        </div>

        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 마케팅 프로세스 설명 섹션 */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">MARKETING PROCESS</span>
            <h2 className="section-title">
              온라인 마케팅의 <span className="gradient-text">완전한 설계</span>
            </h2>
          </div>

          <div className="process-content">
            <div className="process-flow">
              <div className="process-item">
                <span className="process-number">1</span>
                <span className="process-name">노출</span>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-item">
                <span className="process-number">2</span>
                <span className="process-name">클릭</span>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-item">
                <span className="process-number">3</span>
                <span className="process-name">방문/예약</span>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-item">
                <span className="process-number">4</span>
                <span className="process-name">리뷰</span>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-item">
                <span className="process-number">5</span>
                <span className="process-name">재방문</span>
              </div>
            </div>

            <div className="process-description">
              <p className="process-main">
                온라인 마케팅은 <strong>노출, 클릭, 방문/예약, 리뷰, 재방문</strong> 이렇게
                <br />
                다섯 가지 과정을 <span className="highlight">완벽하게 설계</span>하는 일입니다.
              </p>
              <p className="process-sub">
                그동안 사장님의 마케팅이 실패했던 이유는 이 과정을 설계하는 것이 아니라
                <br />
                그 중 <span className="warning">아주 작은 하나의 부분만</span>을 해주는 회사와 일을 했기 때문입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 문제 진단 섹션 */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PROBLEM</span>
            <h2 className="section-title">
              왜 마케팅이 <span className="gradient-text-red">실패</span>하는가?
            </h2>
            <p className="section-subtitle">대부분의 사장님들이 겪는 마케팅 실패 원인</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-number">01</div>
              <h3>노출만 집중</h3>
              <p>클릭과 방문 준비 없이 노출만 늘리면 돈만 낭비됩니다</p>
              <div className="problem-result">❌ 결과: 광고비만 증가</div>
            </div>

            <div className="problem-card">
              <div className="problem-number">02</div>
              <h3>리뷰 관리 부재</h3>
              <p>리뷰는 온라인 입소문의 핵심인데 관리를 안 합니다</p>
              <div className="problem-result">❌ 결과: 신뢰도 하락</div>
            </div>

            <div className="problem-card">
              <div className="problem-number">03</div>
              <h3>재방문 전략 없음</h3>
              <p>신규 고객만 찾다가 단골을 경쟁사에 빼앗깁니다</p>
              <div className="problem-result">❌ 결과: 매출 정체</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5단계 마케팅 전략 섹션 */}
      <section id="marketing-strategy" className="strategy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">SOLUTION</span>
            <h2 className="section-title">
              위즈더플래닝의 <span className="gradient-text-blue">5단계 마케팅 설계</span>
            </h2>
            <p className="section-subtitle">노출부터 재방문까지 완벽한 고객 여정 설계</p>
          </div>

          {/* Step 1: 클릭 */}
          <div className="strategy-step">
            <div className="step-header">
              <div className="step-number">STEP 01</div>
              <h3 className="step-title">클릭 - 첫인상이 전부입니다</h3>
            </div>

            <div className="step-content">
              <div className="step-description">
                <p>검색 결과에서 보이는 정보가 클릭을 결정합니다.</p>
                <p className="step-highlight">클릭률 3배 상승을 위한 최적화 전략</p>
              </div>

              <div className="step-features">
                <div className="feature-item">
                  <div className="feature-icon">📸</div>
                  <div>
                    <h4>배고파지는 음식 사진</h4>
                    <p>전문 푸드 포토그래퍼가 촬영한 고품질 사진</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏪</div>
                  <div>
                    <h4>매력적인 공간 사진</h4>
                    <p>깨끗하고 편안한 매장 분위기 전달</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⭐</div>
                  <div>
                    <h4>풍부한 리뷰 수</h4>
                    <p>신뢰도를 높이는 실제 고객 리뷰</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <div>
                    <h4>눈에 띄는 쿠폰과 혜택</h4>
                    <p>방문 동기를 만드는 특별 혜택</p>
                  </div>
                </div>
              </div>

              <div className="service-provided">
                <h4 className="service-title">🚀 위즈더플래닝이 제공하는 서비스</h4>
                <div className="service-grid">
                  <div className="service-item">
                    <span className="service-icon">📸</span>
                    <span className="service-name">매력적인 사진 촬영</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">👥</span>
                    <span className="service-name">체험단 운영</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">🎬</span>
                    <span className="service-name">움짤 제작</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: 방문/예약 */}
          <div className="strategy-step">
            <div className="step-header">
              <div className="step-number purple">STEP 02</div>
              <h3 className="step-title">방문/예약 - 디테일이 전환을 만듭니다</h3>
            </div>

            <div className="step-content">
              <div className="step-description">
                <p>방문으로 이어지게 하기 위해서는 <strong>단 하나의 요소도 대충 해서는 안됩니다.</strong></p>
                <p className="step-highlight">사진, 영상, 친절한 설명, 매력적인 메뉴까지 모든 디테일이 방문을 결정합니다</p>
              </div>

              <div className="conversion-formula">
                <div className="formula-box">
                  <div className="formula-item">
                    <span className="formula-label">유입수</span>
                    <span className="formula-value">10,000명</span>
                  </div>
                  <span className="formula-operator">×</span>
                  <div className="formula-item">
                    <span className="formula-label">전환율</span>
                    <span className="formula-value">9%</span>
                  </div>
                  <span className="formula-operator">×</span>
                  <div className="formula-item">
                    <span className="formula-label">객단가</span>
                    <span className="formula-value">40,000원</span>
                  </div>
                  <span className="formula-operator">=</span>
                  <div className="formula-item highlight">
                    <span className="formula-label">예상매출</span>
                    <span className="formula-value">36,000,000원</span>
                  </div>
                </div>
              </div>

              <div className="step-features">
                <div className="feature-item">
                  <div className="feature-icon">📋</div>
                  <div>
                    <h4>완벽한 메뉴 정보</h4>
                    <p>가격, 구성, 사진까지 상세하게</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <div>
                    <h4>타겟 맞춤 혜택</h4>
                    <p>첫방문, 단체, 생일 등 맞춤 쿠폰</p>
                  </div>
                </div>
              </div>

              <div className="service-provided">
                <h4 className="service-title">🚀 꼼꼼한 위즈더플래닝이 제공하는 서비스</h4>
                <div className="service-grid">
                  <div className="service-item">
                    <span className="service-icon">🎬</span>
                    <span className="service-name">공간 영상 촬영</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">🍽️</span>
                    <span className="service-name">메뉴 영상 제작</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">🔍</span>
                    <span className="service-name">경쟁업체 분석</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">🎁</span>
                    <span className="service-name">매력적인 예약혜택 설정</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">📢</span>
                    <span className="service-name">다양한 소식 발행</span>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">💬</span>
                    <span className="service-name">고객 문의 100% 응대</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: 노출 */}
          <div className="strategy-step">
            <div className="step-header">
              <div className="step-number pink">STEP 03</div>
              <h3 className="step-title">노출 - 노출이 먼저가 아니었다.</h3>
            </div>

            <div className="step-content">
              <div className="step-description">
                <p>노출은 클릭 세팅과 방문 세팅 후에 이루어져야 합니다.</p>
                <p className="step-highlight">보통 다른 광고회사들은 노출만 신경씁니다. 아무도 클릭하지 않는데도...</p>
                <p>같은 비용으로 3배 효과를 만드는 전략적 노출</p>
              </div>

              <div className="service-provided">
                <h4 className="service-title">🎯 우리가 제공하는 서비스</h4>
                <div className="service-grid">
                  <div className="service-item">
                    <span className="service-icon">💬</span>
                    <div className="service-content">
                      <h5>광고주와 실시간 상담</h5>
                      <p>지속적인 소통으로 니즈 파악</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">📊</span>
                    <div className="service-content">
                      <h5>트렌드 분석 및 채널 선정</h5>
                      <p>현재 트렌드와 필요성을 파악하여 최적 채널 선택</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">💰</span>
                    <div className="service-content">
                      <h5>선택된 채널 유료광고 집행</h5>
                      <p>효율적인 예산 분배와 타겟팅</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exposure-channels">
                <div className="channel-card">
                  <div className="channel-header naver">
                    <h4>네이버 마케팅</h4>
                    <span className="channel-badge">핵심 채널</span>
                  </div>
                  <ul className="channel-list">
                    <li>플레이스 상위 노출</li>
                    <li>파워콘텐츠 등록</li>
                    <li>블로그 영역 노출</li>
                    <li>스마트플레이스 광고</li>
                  </ul>
                </div>

                <div className="channel-card">
                  <div className="channel-header sns">
                    <h4>SNS 마케팅</h4>
                    <span className="channel-badge">바이럴 효과</span>
                  </div>
                  <ul className="channel-list">
                    <li>유튜브 매장 홍보 영상</li>
                    <li>인스타그램 릴스 제작</li>
                    <li>페이스북 타겟 광고</li>
                    <li>틱톡 챌린지 마케팅</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: 리뷰 */}
          <div className="strategy-step highlight-step">
            <div className="step-header">
              <div className="step-number orange">STEP 04</div>
              <h3 className="step-title">리뷰 - 온라인 입소문의 힘</h3>
              <div className="special-badge">🎁 특별 제공</div>
            </div>

            <div className="step-content">
              <div className="step-description">
                <p>자발적 참여를 유도하는 재미있는 리뷰 이벤트가 핵심입니다.</p>
                <p className="step-highlight">리뷰 100개 = 매출 30% 상승 효과</p>
              </div>

              <div className="review-special">
                <div className="lottery-box">
                  <div className="lottery-header">
                    <h4>🎫 리뷰 복권 이벤트</h4>
                    <span className="lottery-count">2,000장 제공</span>
                  </div>
                  <div className="lottery-content">
                    <p>일반적인 음료수 제공 vs 복권 이벤트</p>
                    <div className="comparison">
                      <div className="compare-item">
                        <span className="compare-label">일반 이벤트</span>
                        <span className="compare-value">참여율 5%</span>
                      </div>
                      <div className="compare-item highlight">
                        <span className="compare-label">복권 이벤트</span>
                        <span className="compare-value">참여율 85%</span>
                      </div>
                    </div>
                    <p className="lottery-note">같은 음료수를 주더라도 복권 참여를 통해 주는 것은 참여율을 몇 십배로 올릴 수 있습니다!</p>
                    <p className="lottery-note">한국인의 심리를 활용한 재미있는 마케팅!</p>
                  </div>
                </div>
              </div>

              <div className="service-provided">
                <h4 className="service-title">🎁 우리가 제공하는 서비스</h4>
                <div className="service-grid">
                  <div className="service-item">
                    <span className="service-icon">🎫</span>
                    <div className="service-content">
                      <h5>복권 2,000장 제공</h5>
                      <p>리뷰 이벤트용 복권 전체 제공</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <span className="service-icon">📝</span>
                    <div className="service-content">
                      <h5>리뷰 작성 유도 시스템</h5>
                      <p>복권이 모두 소진되면 방문자 리뷰 2,000개 달성</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="review-benefits">
                <div className="benefit-stat">
                  <span className="stat-number">2,000</span>
                  <span className="stat-label">예상 리뷰 수</span>
                </div>
                <div className="benefit-stat">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">평균 별점</span>
                </div>
                <div className="benefit-stat">
                  <span className="stat-number">TOP 3</span>
                  <span className="stat-label">지역 순위</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: 재방문 */}
          <div className="strategy-step">
            <div className="step-header">
              <div className="step-number red">STEP 05</div>
              <h3 className="step-title">재방문 - 단골 만들기 전략</h3>
            </div>

            <div className="step-content">
              <div className="step-description">
                <p>경쟁 매장에 빼앗기지 않는 재방문 설계가 필요합니다.</p>
                <p className="step-highlight">단골 고객 1명 = 신규 고객 10명의 가치</p>
              </div>

              <div className="revisit-system">
                <div className="system-box">
                  <div className="system-header">
                    <h4>📱 포인트 적립 시스템</h4>
                    <span className="system-badge">3개월 무료 제공</span>
                  </div>
                  <div className="system-features">
                    <div className="system-item">
                      <span className="item-icon">💳</span>
                      <span>태블릿 무료 설치</span>
                    </div>
                    <div className="system-item">
                      <span className="item-icon">👥</span>
                      <span>고객 DB 자동 구축</span>
                    </div>
                    <div className="system-item">
                      <span className="item-icon">📨</span>
                      <span>문자/카톡 마케팅</span>
                    </div>
                    <div className="system-item">
                      <span className="item-icon">🎂</span>
                      <span>생일/기념일 쿠폰</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="revisit-stats">
                <p className="stats-title">재방문 시스템 도입 효과</p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">45%</span>
                    <span className="stat-desc">재방문율 상승</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">3.2회</span>
                    <span className="stat-desc">월 평균 방문</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">65%</span>
                    <span className="stat-desc">객단가 증가</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 가격 정책 섹션 */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">PRICING</span>
            <h2 className="section-title">
              투명한 <span className="gradient-text-purple">가격 정책</span>
            </h2>
            <p className="section-subtitle">모든 서비스를 포함한 통합 패키지</p>
          </div>

          <div className="pricing-container">
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>온라인 마케팅 통합 패키지</h3>
                <p className="pricing-desc">미나리산장 본점 맞춤형</p>
              </div>

              <div className="pricing-price">
                <span className="price-value">250</span>
                <span className="price-unit">만원</span>
                <span className="price-period">+</span>
                <span className="price-value">50</span>
                <span className="price-unit">만원(유료광고비)</span>
              </div>

              <div className="service-summary">
                <h4>📋 제공되는 모든 서비스</h4>

                <div className="service-category">
                  <h5>✨ STEP 01: 클릭 유도 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 매력적인 사진 촬영 및 보정</li>
                    <li>✓ 체험단 운영 및 관리</li>
                    <li>✓ 움짤(GIF) 제작</li>
                    <li>✓ 눈에 띄는 피드 디자인</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h5>📍 STEP 02: 방문/예약 전환 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 매장 정보 최적화</li>
                    <li>✓ 예약 시스템 구축</li>
                    <li>✓ 메뉴 및 가격 정보 관리</li>
                    <li>✓ 영업시간 및 휴무일 안내</li>
                    <li>✓ 주차 정보 및 편의시설 안내</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h5>💡 STEP 03: 전략적 노출 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 광고주와 실시간 상담</li>
                    <li>✓ 트렌드 분석 및 채널 선정</li>
                    <li>✓ 선택된 채널 유료광고 집행</li>
                    <li>✓ 네이버 플레이스 최적화</li>
                    <li>✓ SNS 마케팅 (유튜브, 인스타그램, 페이스북, 틱톡)</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h5>🎁 STEP 04: 리뷰 이벤트 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 복권 2,000장 제공</li>
                    <li>✓ 리뷰 작성 유도 시스템 구축</li>
                    <li>✓ 리뷰 관리 및 답변 대행</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h5>🔄 STEP 05: 재방문 유도 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 포인트 시스템 무료 제공</li>
                    <li>✓ 단골 고객 관리 시스템</li>
                    <li>✓ 정기 이벤트 기획 및 실행</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h5>🎨 추가 제공 서비스</h5>
                  <ul className="pricing-features">
                    <li>✓ 디자인 지원 (메뉴판, 배너, 홍보물)</li>
                    <li>✓ 티맵(T-map) 매장 등록 및 관리</li>
                    <li>✓ 카카오 매장 관리</li>
                    <li>✓ 당근마켓 홍보 글 작성</li>
                    <li>✓ 구글 비즈니스 프로필 세팅</li>
                    <li>✓ 기타 온라인 마케팅 채널 세팅 (원하시는 채널 말씀해주세요)</li>
                  </ul>
                </div>
              </div>

              <div className="additional-note">
                <p className="note-highlight">
                  💼 온라인 직원을 고용했다고 생각하세요
                </p>
                <p className="note-text">
                  계약 내용 외에도 온라인 마케팅과 관련된 업무를 요청하시면
                  최선을 다해 실무를 지원해드립니다. 매장의 온라인 성장을 위해
                  필요한 모든 것을 함께 고민하고 해결해드립니다.
                </p>
              </div>

              <button className="pricing-btn featured">지금 상담 신청하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            지금 시작하지 않으면
            <br />
            <span className="gradient-text-gold">경쟁사가 먼저</span> 시작합니다
          </h2>

          <p className="cta-description">
            매달 미루는 것은 매달 1억의 기회를 놓치는 것입니다
            <br />
            지금 바로 무료 상담을 받아보세요
          </p>

          <div className="cta-buttons">
            <button className="cta-btn-primary">
              <span>📞</span>
              지금 바로 상담 신청
            </button>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>무료 현장 진단</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>맞춤 전략 제안</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">✓</span>
              <span>예상 매출 분석</span>
            </div>
          </div>

          <div className="footer-info">
            <h3>위즈더플래닝</h3>
            <p>온라인 마케팅 전문 기업</p>
            <p className="contact-info">
              📞 1670-0708 | 📧 wiz@wiztheplanning.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}