package com.entity.view;

import com.entity.JiaxiaoxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 驾校信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-22 15:32:18
 */
@TableName("jiaxiaoxinxi")
public class JiaxiaoxinxiView  extends JiaxiaoxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public JiaxiaoxinxiView(){
	}
 
 	public JiaxiaoxinxiView(JiaxiaoxinxiEntity jiaxiaoxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, jiaxiaoxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
