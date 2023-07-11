describe('Automatización de mi página',  () => {
     
    it('Resgistrar empleado', async () => {

        let email = 'automationTest@gmail.com';
        let cargo = 'Supervisor'
        let nombre = 'Pablo'

        await browser.url("http://localhost:4200/");   
        await browser.maximizeWindow()
        await browser.pause(3000)
        
        await $('(//input[@id="name"])[1]').setValue(nombre)
        await browser.pause(1000)
        await $('(//input[@id="position"])[1]').setValue(cargo)
        await browser.pause(1000)
        await $('(//input[@id="email"])[1]').setValue(email)
        await browser.pause(1000)

        let btnSave = await $("//button[@class='btn btn-warning']");
        await btnSave.click();
        await browser.pause(1000);

        let employeesList =  await  $("//h2[contains(.,'Listado de Empleados:')]");
        await  employeesList.scrollIntoView();
        await browser.pause(2000)

        let tbody = $('//td[contains(.,"'+email+'")]');
        await expect(tbody).toHaveTextContaining(email);
        
    });
  
     it('Actualizar empleado', async () => {

      let email = 'andres123@bebolder.com';
      let cargo = 'Administrador'
      let nombre = 'Andrés Villa'
      let employeesList =  await  $("//h2[contains(.,'Listado de Empleados:')]");
      await browser.url("http://localhost:4200/");   
      await  employeesList.scrollIntoView();
      await $('(//button[@class="btn btn-primary"])[1]').click()
      await $('(//input[@id="name"])[2]').setValue(nombre)
      await browser.pause(1000)
      await $('(//input[@id="position"])[2]').setValue(cargo)
      await browser.pause(1000)
      await $('(//input[@id="email"])[2]').setValue(email)
      await browser.pause(1000)
      let btnSave = await $("(//button[@class='btn btn-warning'])[2]");
      await btnSave.click();
      await browser.pause(2000);
      await  employeesList.scrollIntoView();
      let tbody = $('//td[contains(.,"'+email+'")]');
      await expect(tbody).toHaveTextContaining(email);
      await browser.pause(1000);
    
     });

     it('Eliminar empleado', async () => {
        let email = 'andres89@gmail.com';
        let cargo = 'Gerente';
        let nombre = 'Andrés';
        let employeesList = await $("//h2[contains(.,'Listado de Empleados:')]");
        await browser.url("http://localhost:4200/");
        await employeesList.scrollIntoView();
        await $('(//button[@class="btn btn-danger"])[1]').click();
        await browser.pause(3000);
        await browser.acceptAlert();
        await browser.pause(3000);
  
       });
   });


 

   

