package com.svetikov.storage2020.service;

import com.svetikov.storage2020.component.PLCComponent;
import com.svetikov.storage2020.models.CarOne;
import com.svetikov.storage2020.models.CarTwo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import si.trina.moka7.live.PLC;

@Service
@Qualifier("car2")
public class CarTwoService implements ServiceCarPosition<CarTwo> {
    private CarTwo car;
    private PLC plc;
    private PLCComponent plcComponent;

    @Autowired
    public CarTwoService(PLCComponent plcComponent) {
        this.car = new CarTwo();
        this.plcComponent = plcComponent;
        plc = plcComponent.getPlc();
    }

    @Value("${car2.adr.xpos}")
    private int xpos;
    @Value("${car2.adr.zpos}")
    private int zpos;
    @Value("${car2.adr.buzyH}")
    private int busyH;
    @Value("${car2.adr.buzyL}")
    private int busyL;
    @Value("${car.ip_address.plc}")
    private String ip_addressPLC;

    @Override
    public void setPos() {
        System.out.println(plc.PLCName);

        try {
            car.setPositionX(  plc.getDInt(true, xpos));
            car.setPositionZ( plc.getDInt(true, zpos));
            car.setBusy(  plc.getBool(true, busyH, busyL));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void setPositionCar(int pos_x, int pos_z) {
        car.setPositionX(pos_x);
        car.setPositionZ(pos_z);
        car.setBusy(true);
    }

    @Override
    public CarTwo getPositionCar() {
        return car;
    }
}
