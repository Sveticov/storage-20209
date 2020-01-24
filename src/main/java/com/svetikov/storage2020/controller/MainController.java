package com.svetikov.storage2020.controller;

import com.svetikov.storage2020.component.ComponentPLCDATA;
import com.svetikov.storage2020.component.PLCComponent;
import com.svetikov.storage2020.models.BoardBox;
import com.svetikov.storage2020.models.PLCData;
import com.svetikov.storage2020.repository.PLCRepository;
import com.svetikov.storage2020.service.ModelService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
@RestController

@RequestMapping("/app")
public class MainController {
    @Autowired
    @Qualifier("plc")
    ModelService<PLCData, Integer> plcRepository;
    @Autowired
    @Qualifier("board")
    ModelService<BoardBox, Long> boardRepository;
    @Autowired
    PLCComponent plcComponent;

    @GetMapping("/1")
    public List<PLCData> getA() {
        return plcRepository.getAllModel();
    }

    @GetMapping("/2")
    public void getB() throws Exception {
        plcComponent.onInitDBAreaPLC();
    }

    @GetMapping("/3")
    public List<BoardBox> box() {

        return boardRepository.getAllModel();
    }
    @GetMapping("/5")
    public ResponseEntity< PLCData> getOne(){
        PLCData plc=new PLCData("1",9,1,2,3,4,5);
        return new ResponseEntity<>(plc,HttpStatus.OK);
    }

    @PostMapping("/plc/newplc")
    public ResponseEntity<PLCData> newPLCData(@RequestBody PLCData plcData){
        log.info(plcData.toString());
        if(plcData.getAdrIP().equals(null)&plcData.getDbRead()==0)return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        plcRepository.saveModel(plcData);
        return new ResponseEntity<>(plcData,HttpStatus.OK);
    }

}
