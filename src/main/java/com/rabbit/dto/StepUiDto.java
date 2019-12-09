package com.rabbit.dto;

import com.rabbit.model.StepUi;
import lombok.Data;

@Data
public class StepUiDto extends StepUi {
	private static final long serialVersionUID = 1L;
	private String byType;
	private String byValue;//排序
}
