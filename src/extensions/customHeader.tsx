import React, { FC, useEffect, useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import { NextPage } from "next";
import services from "@/services";

type HeaderProps = {
  data: any[];
};

const CustomHeader: NextPage<HeaderProps> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    services.getLoginPageUIConfigs({ orgCode: undefined }).then((res) => {
      console.log(res.data.length, "<--------");
      setData(res.data)
    });
  }, []);
  return (
    <>
      <Link href="/productList">
        <Button>商品展示页</Button>
      </Link>
    </>
  );
};

export default CustomHeader;
