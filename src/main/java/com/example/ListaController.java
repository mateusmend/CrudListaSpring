package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lista")
public class ListaController {
	@Autowired
	private ListaRepository repo;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Lista> getAll(){
		return repo.findAll();
	}
	@RequestMapping(method = RequestMethod.POST)
	public void addList(@RequestBody Lista novo){
		repo.save(novo);
	}
	@RequestMapping(method = RequestMethod.PUT)
	public void modifyList(@RequestBody Lista novo){
		repo.save(novo);
	}
	@RequestMapping(method = RequestMethod.DELETE)
	public void deletList(@RequestBody Lista del){
		repo.delete(del);
	}
}
