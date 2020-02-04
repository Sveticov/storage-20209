package com.svetikov.storage2020.controller;

import com.svetikov.storage2020.models.PLCDbData;
import com.svetikov.storage2020.service.ModelService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/app/plcdb")
public class PLCDBController {
    //    private List<PLCDbData> plcDbDatas = new ArrayList<>();
    private final ModelService<PLCDbData, Integer> plcDbDataIntegerModelService;


    @Autowired
    public PLCDBController(ModelService<PLCDbData, Integer> plcDbDataIntegerModelService) {
        this.plcDbDataIntegerModelService = plcDbDataIntegerModelService;
    }

    @PostMapping("/create")
    public ResponseEntity<List<PLCDbData>> createNewDB(@RequestBody PLCDbData plcDbData) {
//        plcDbDatas.add(plcDbData);
        log.info(plcDbData.toString());
        plcDbDataIntegerModelService.saveModel(plcDbData);
        return new ResponseEntity<>(plcDbDataIntegerModelService.getAllModel(), HttpStatus.OK);
    }

    @GetMapping("/all/db")
    public ResponseEntity<List<PLCDbData>> getAllPLCDB() {
        return new ResponseEntity<>(plcDbDataIntegerModelService.getAllModel(), HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")
    public ResponseEntity<List<PLCDbData>> deletePLCDB(@PathVariable("id")int id){

        plcDbDataIntegerModelService.deleteModel(id);
        return new ResponseEntity<>(plcDbDataIntegerModelService.getAllModel(),HttpStatus.OK);
    }

}
