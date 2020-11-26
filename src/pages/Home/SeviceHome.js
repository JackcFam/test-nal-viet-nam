import React from "react";

function SeviceHome(props) {
  return (
    <>
      <div class="row service-home">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="container-service-home">
            <div class="title-service-home">
              <h3>特長１）日本語が「超」得意、ビジネス企画から参加可能</h3>
            </div>
            <img
              class="img-service-home"
              src="https://nal.co.jp/wp-content/uploads/2019/09/top13_fotolia_214560396.jpg"
            ></img>
            <div class="content-service-home">
              NALは、ベトナムで最上級レベルの日本語コミュニケーション能力を保有。N1/N2を保有あるいは日本の大学を卒業したメンバーが30名以上在籍しておりお客様をサポートします。
              基本設計はもちろん、要件定義や、ビジネス企画までご支援することが可能です。
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="container-service-home">
            <div class="title-service-home">
              <h3>特長２）アジャイル/DevOpsでベトナムIT業界をリード</h3>
            </div>
            <img
              class="img-service-home"
              src="https://nal.co.jp/wp-content/uploads/2019/09/top22_fotolia_190496678.jpg"
            ></img>
            <div class="content-service-home">
              NALには、アジャイル/DevOpsの領域において、ベトナムIT業界をリードする人材が集結しています。
              また5名以上のエンジニアがCSM( Certificated Scrum Master)
              資格を保有しており、お客様側にアジャイル/DevOpsの経験が不足していても、NALがプロジェクトをリードすることができます。
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="container-service-home">
            <div class="title-service-home">
              <h3>
                特長３）高いモチベーション、コミュニケーション力、開発技術
              </h3>
            </div>
            <img
              class="img-service-home"
              src="https://nal.co.jp/wp-content/uploads/2019/09/top11_fotolia_278693570.jpg"
            ></img>
            <div class="content-service-home">
              ベトナムオフショア開発企業における離職率は一般的に20％以上と言われています。そのような中、NALのエンジニアは高いモチベーションを維持。離職率は10%以下です。よってお客様と長くお付き合いすることができます。また、AI（人工知能）やブロックチェーンなど、最新技術を使った開発経験も豊富です。
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="button-our-development">
            <a href="#">
              OUR DEVELOPMENT <i class="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeviceHome;
