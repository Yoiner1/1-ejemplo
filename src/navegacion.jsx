import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function Navegacion() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
return (
<Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Inicio" />
  <Tab value="two" label="Acerca de" />
  <Tab value="three" label="Contacto" />
</Tabs>
  )
}

export default Navegacion