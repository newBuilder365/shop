import React from "react";
import { Layout } from "antd";
import { InferGetServerSidePropsType } from "next";
import services from "@/services";
import { wrapper } from "@/store";
import { setAuthState } from "@/store/authSlice";
import CustomHeader from "@/extensions/customHeader";
import { useDispatch } from "react-redux";

const { Header, Content } = Layout;


const Home = ({
  data,
  authState
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: "8vh",
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    height: "92vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  console.log('authState111', authState)
  return (
    <Layout>
      <Header style={headerStyle}>
        <CustomHeader data={data} />
      </Header>
      <Content style={contentStyle}>{JSON.stringify(data)}</Content>
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const res = await services.getLoginPageUIConfigs({ orgCode: undefined });
//   return {
//       redirect: {
//         destination: "/productList",
//         permanent: false,
//       },
//     };
// };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(setAuthState(true))
    const res = await services.getLoginPageUIConfigs({ orgCode: undefined });
    return {
      props: {
        authState: true,
        data: res.data
      }
    }
  }
);

export default Home;
