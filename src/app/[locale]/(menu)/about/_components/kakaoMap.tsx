"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const ReactKakaoMap = ({
  coordinates: [latitude, longitude],
}: {
  coordinates: [number, number];
}) => {
  const mapEl = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) return;

    kakao.maps.load(() => {
      if (!mapEl.current) return;

      const center = new kakao.maps.LatLng(latitude, longitude);
      const options = {
        center,
        level: 3,
      };

      // 지도 생성
      const map = new kakao.maps.Map(mapEl.current, options);
      mapRef.current = map;

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position: center,
        map: map,
      });
      markerRef.current = marker;

      // 줌 컨트롤러 추가
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 지도의 마우스 휠 줌 동작 설정
      map.setZoomable(false); // 줌 허용

      // 지도 엘리먼트에서 마우스 휠 이벤트 처리
    });
  }, []);

  useEffect(() => {
    // coordinates 변경 시 지도 중심 및 마커 업데이트
    if (mapRef.current && markerRef.current) {
      const center = new window.kakao.maps.LatLng(latitude, longitude);
      mapRef.current.setCenter(center);
      markerRef.current.setPosition(center);
    }
  }, [latitude, longitude]);

  return <div ref={mapEl} style={{ width: "100%", height: "100%" }}></div>;
};

export default ReactKakaoMap;
