import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';

const itemData = [
  {
    img: "https://am3pap005files.storage.live.com/y4mpsRHqeic69vQFQw49-c8gJFs2bTjlpeAscY243-j3wQ5nMJSmH2xZrtqhos2k5y_DBaAc3kYiUl28OLH1RINpZQ-ki6FZPNRbx-TR-qQSoVgMb45ufY8g87sCuG-TzoDuZ_wfKuiBLTqLp3eHYXS3zUx_zVwXanBXAT3BDTnAFeSaMKTORZ8bPjuXEZTtCii3EtO09KxzHAuWBhuwA6pFQ/P1070779%20%282%29.JPG?psid=1&width=1762&height=1176",
    title: 'Breakfast',
  },
  {
    img: 'https://am4pap001files.storage.live.com/y4mcTw__nf1fvPY1HOfM93PEUboxiRttYaxnC_GG5uyM8gg_LtWCLhoXNz4TKAr6FjlgLT0rkRE_O1xfCxEYol258M06jjO5MeEn8aAa74CICFXvU98c_vSfeeL5ehiTBQPPBqonccOYhiR3diNZFb9R_8HCWcAsR5r9c1bIFxchLeiOGGU3aOCrt8QClbi2foaQP3SZirOOOczh0IxILLUiw/P1070732.JPG?psid=1&width=1761&height=1176',
    title: 'Burger',
  },
  {
    img: 'https://am3pap006files.storage.live.com/y4m4pKUvkmHJo5P-m1kffytKff2g9LteXaVkOBOHgMNQYEoIdCEXfLaWXB7l4RFEFugDTvKM1udvUP2AZ1MgF60J_cvRS9e7AuQ1cdBOzLKRxnSlpR6XvB0f_y4TLl6rP_sHiNwjNE4PjyS6zNT_gG5PmWKm1kk02yvk46K0zLIk2Jy1o_d6syErJOLMwYVkujoEqfGt0e9fVDaefDyjS4kMg/P1070797.JPG?psid=1&width=1150&height=769',
    title: 'Camera',
  },
  {
    img: 'https://ams02pap001files.storage.live.com/y4m4PwlrbFKEcIa85U2vn1nDsz6is_Y6Wtrq9x2HV4Q8XQsYc47vlXiMffIldj6tLXU-ae_UETpn0jKxe0vZGS_k_08H2oIMJ9x5CnwVnAHTjRc6daZ9nKV7o7PQ69EwvynDUpc4ix-0HlDb80xlXJljZPVe76I3idFfcNT6oK_vfcFfI-bZctM55dfWysNsEfZRvpAt_DhbTUNhZn-6XSTFw/P1070866.JPG?psid=1&width=1150&height=769',
    title: 'Coffee',
  },
  {
    img: 'https://am3pap004files.storage.live.com/y4m71WeNzYMG0V_zsjHwQD0Cm8Q07B8wt3b22XwhZzXkXFQ2SvEzlRK0OZAelYUcDyz4ujg_9XMh3IDDHavrEUSCgLWd-Jr8YlmUX3QX_rYuTHedePSjA6I1OOGMczBrpHyRexMHtJXkvWE5Wm3FnwVqEtU7qIxdWHbkMJBl3NFbPCBujJGxFAw_DHEu5ghvy18pvZOdjU2ZpBeuOL2STmdRw/P1070949%20%282%29.JPG?psid=1&width=1150&height=769',
    title: 'Hats',
  },
  {
    img: 'https://image.fupa.net/news/H8WUqGI8RA1z/1440x960.webp',
    title: 'Lol',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yvoktf3Fzk-lYvpodVYQVKvN7XcBu8sgqg&usqp=CAU',
    title: 'Test',
  },

];

const Container = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 1rem;
  justify-content: space-between;
  display: flex; 
`;


const Pics = () => {
  return (
    <Container>
   
    <ImageList sx={{ width: 1200, height: 450 }} cols={7} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      
    </Container>
  );
};

export default Pics;

